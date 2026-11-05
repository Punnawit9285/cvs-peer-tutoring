import Foundation
import PDFKit
import AppKit

// pdfrender info  <pdf>
// pdfrender sheet <pdf> <out.png> <pxWidthPerPage> <cols> <page> [page...]   (pages 1-based; 10% grid + labels)
// pdfrender crop  <pdf> <page> <pxWidth> <x0> <y0> <x1> <y1> <out.png|out.jpg>  (normalized, origin top-left)

var rawArgs = CommandLine.arguments
var noAnnots = false
var cleanThr = -1
var masks: [[Double]] = []
rawArgs = rawArgs.filter { a in
    if a == "--noannots" { noAnnots = true; return false }
    if a.hasPrefix("--mask=") { masks.append(a.dropFirst(7).split(separator: ",").map { Double($0)! }); return false }
    if a.hasPrefix("--clean") { cleanThr = a.contains("=") ? Int(a.split(separator: "=")[1])! : 26; return false }
    return true
}
let args = rawArgs
func fail(_ m: String) -> Never { FileHandle.standardError.write((m + "\n").data(using: .utf8)!); exit(1) }
guard args.count >= 3 else { fail("usage") }
let cmd = args[1]
guard let doc = PDFDocument(url: URL(fileURLWithPath: args[2])) else { fail("cannot open pdf") }

func pageImage(_ n: Int, width: Int) -> CGImage {
    guard let page = doc.page(at: n - 1) else { fail("no page \(n)") }
    if noAnnots { page.displaysAnnotations = false }
    var b = page.bounds(for: .mediaBox).size
    if page.rotation % 180 != 0 { b = NSSize(width: b.height, height: b.width) }
    let h = Int((CGFloat(width) * b.height / b.width).rounded())
    let cs = CGColorSpaceCreateDeviceRGB()
    guard let ctx = CGContext(data: nil, width: width, height: h, bitsPerComponent: 8, bytesPerRow: 0, space: cs, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue) else { fail("ctx") }
    ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    ctx.fill(CGRect(x: 0, y: 0, width: width, height: h))
    ctx.interpolationQuality = .high
    let s = CGFloat(width) / b.width
    ctx.saveGState()
    ctx.scaleBy(x: s, y: s)
    // apply the page's own display transform (handles rotation and crop offsets)
    ctx.concatenate(page.transform(for: .mediaBox))
    page.draw(with: .mediaBox, to: ctx)
    ctx.restoreGState()
    // white-out rectangles (normalized page coords, origin top-left); CG origin is bottom-left
    ctx.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    for m in masks { ctx.fill(CGRect(x: m[0] * Double(width), y: Double(h) - m[3] * Double(h), width: (m[2] - m[0]) * Double(width), height: (m[3] - m[1]) * Double(h))) }
    let out = ctx.makeImage()!
    return cleanThr >= 0 ? clean(out, cleanThr) : out
}
func clean(_ img: CGImage, _ thr: Int) -> CGImage {
    let w = img.width, h = img.height
    let cs = CGColorSpaceCreateDeviceRGB()
    let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: w * 4, space: cs, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
    ctx.draw(img, in: CGRect(x: 0, y: 0, width: w, height: h))
    let p = ctx.data!.bindMemory(to: UInt8.self, capacity: w * h * 4)
    var n = 0
    for i in 0..<(w * h) {
        let r = Int(p[i*4]), g = Int(p[i*4+1]), b = Int(p[i*4+2])
        if max(r, g, b) - min(r, g, b) > thr { p[i*4] = 255; p[i*4+1] = 255; p[i*4+2] = 255; n += 1 }
    }
    FileHandle.standardError.write("cleaned \(n) px\n".data(using: .utf8)!)
    return ctx.makeImage()!
}
func write(_ img: CGImage, _ path: String) {
    let rep = NSBitmapImageRep(cgImage: img)
    let isJpg = path.lowercased().hasSuffix(".jpg") || path.lowercased().hasSuffix(".jpeg")
    let data = isJpg ? rep.representation(using: .jpeg, properties: [.compressionFactor: 0.86])! : rep.representation(using: .png, properties: [:])!
    try! data.write(to: URL(fileURLWithPath: path))
}

switch cmd {
case "info":
    print("pages:", doc.pageCount)
    for i in 0..<min(doc.pageCount, 3) { let p = doc.page(at: i)!; print(i + 1, p.bounds(for: .mediaBox).size, "rot", p.rotation) }
case "text":
    for i in 0..<doc.pageCount { let p = doc.page(at: i)!; print("=== PAGE \(i + 1)"); print(p.string ?? "") }
case "highlights":
    // find yellow highlighter bands and print the text underneath (pages 1-based; all if none given)
    let pages = args.count > 3 ? args[3...].map { Int($0)! } : Array(1...doc.pageCount)
    for n in pages {
        let page = doc.page(at: n - 1)!
        let img = pageImage(n, width: 1000)
        let w = img.width, h = img.height
        let cs = CGColorSpaceCreateDeviceRGB()
        let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: w * 4, space: cs, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
        ctx.draw(img, in: CGRect(x: 0, y: 0, width: w, height: h))
        let p = ctx.data!.bindMemory(to: UInt8.self, capacity: w * h * 4)
        // CGContext memory row 0 = top of image
        var rows: [(Int, Int, Int)] = []   // y, minx, maxx
        for y in 0..<h {
            var c = 0, mn = w, mx = 0
            for x in 0..<w { let i = (y * w + x) * 4; let r = Int(p[i]), g = Int(p[i+1]), b = Int(p[i+2])
                if r > 200 && g > 190 && b < 140 { c += 1; mn = min(mn, x); mx = max(mx, x) } }
            if c > 25 { rows.append((y, mn, mx)) }
        }
        var bands: [(Int, Int, Int, Int)] = []
        for r in rows { if let last = bands.last, r.0 - last.1 <= 2 { bands[bands.count - 1] = (last.0, r.0, min(last.2, r.1), max(last.3, r.2)) } else { bands.append((r.0, r.0, r.1, r.2)) } }
        let b = page.bounds(for: .mediaBox); let s = CGFloat(w) / b.width
        for bd in bands where bd.1 - bd.0 >= 6 {
            let rect = CGRect(x: b.minX + CGFloat(bd.2) / s, y: b.minY + CGFloat(h - bd.1) / s, width: CGFloat(bd.3 - bd.2) / s, height: CGFloat(bd.1 - bd.0) / s)
            let t = (page.selection(for: rect)?.string ?? "").replacingOccurrences(of: "\n", with: " ")
            print("p\(n) y\(bd.0): \(t)")
        }
    }
case "annots":
    for i in 0..<doc.pageCount { let p = doc.page(at: i)!; if !p.annotations.isEmpty { print(i + 1, p.annotations.count, Set(p.annotations.map { $0.type ?? "?" })) } }
case "sheet":
    let out = args[3], pw = Int(args[4])!, cols = Int(args[5])!
    let pages = args[6...].map { Int($0)! }
    let imgs = pages.map { pageImage($0, width: pw) }
    let ph = imgs.map { $0.height }.max()!
    let rows = (imgs.count + cols - 1) / cols
    let W = cols * (pw + 24) + 24, H = rows * (ph + 44) + 24
    let cs = CGColorSpaceCreateDeviceRGB()
    let ctx = CGContext(data: nil, width: W, height: H, bitsPerComponent: 8, bytesPerRow: 0, space: cs, bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue)!
    ctx.setFillColor(CGColor(gray: 0.82, alpha: 1)); ctx.fill(CGRect(x: 0, y: 0, width: W, height: H))
    let nsctx = NSGraphicsContext(cgContext: ctx, flipped: false)
    NSGraphicsContext.saveGraphicsState(); NSGraphicsContext.current = nsctx
    for (k, img) in imgs.enumerated() {
        let c = k % cols, r = k / cols
        let x0 = 24 + c * (pw + 24)
        let yTop = H - (24 + r * (ph + 44) + 30)          // top edge of the page image (CG coords, origin bottom-left)
        let rect = CGRect(x: x0, y: yTop - img.height, width: img.width, height: img.height)
        ctx.draw(img, in: rect)
        // grid every 10%
        ctx.setLineWidth(1)
        for i in 1..<10 {
            let f = CGFloat(i) / 10
            ctx.setStrokeColor(CGColor(red: 1, green: 0, blue: 0, alpha: i == 5 ? 0.55 : 0.30))
            ctx.move(to: CGPoint(x: rect.minX + rect.width * f, y: rect.minY)); ctx.addLine(to: CGPoint(x: rect.minX + rect.width * f, y: rect.maxY)); ctx.strokePath()
            ctx.move(to: CGPoint(x: rect.minX, y: rect.maxY - rect.height * f)); ctx.addLine(to: CGPoint(x: rect.maxX, y: rect.maxY - rect.height * f)); ctx.strokePath()
            let attrs: [NSAttributedString.Key: Any] = [.font: NSFont.boldSystemFont(ofSize: 13), .foregroundColor: NSColor.red]
            ("\(i)" as NSString).draw(at: CGPoint(x: rect.minX + rect.width * f + 2, y: rect.maxY - 15), withAttributes: attrs)
            ("\(i)" as NSString).draw(at: CGPoint(x: rect.minX + 2, y: rect.maxY - rect.height * f + 2), withAttributes: attrs)
        }
        let la: [NSAttributedString.Key: Any] = [.font: NSFont.boldSystemFont(ofSize: 18), .foregroundColor: NSColor.black]
        ("p.\(pages[k])" as NSString).draw(at: CGPoint(x: x0, y: yTop + 6), withAttributes: la)
    }
    NSGraphicsContext.restoreGraphicsState()
    write(ctx.makeImage()!, out)
    print("sheet", W, "x", H)
case "crop":
    let n = Int(args[3])!, pw = Int(args[4])!
    let x0 = Double(args[5])!, y0 = Double(args[6])!, x1 = Double(args[7])!, y1 = Double(args[8])!
    let out = args[9]
    let img = pageImage(n, width: pw)
    let W = Double(img.width), H = Double(img.height)
    let r = CGRect(x: (x0 * W).rounded(), y: (y0 * H).rounded(), width: ((x1 - x0) * W).rounded(), height: ((y1 - y0) * H).rounded())
    guard let c = img.cropping(to: r) else { fail("crop failed") }
    write(c, out)
    print(out, c.width, "x", c.height)
default: fail("unknown command")
}
