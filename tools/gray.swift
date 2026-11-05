import Foundation
import AppKit
// gray <in.png> [more.png ...]  : rewrite each PNG in place as 8-bit grayscale (for black/white scans)
var lift = 256
var files: [String] = []
for a in CommandLine.arguments.dropFirst() { if a.hasPrefix("--lift=") { lift = Int(a.dropFirst(7))! } else { files.append(a) } }
for path in files {
    guard let src = NSImage(contentsOfFile: path), let cg = src.cgImage(forProposedRect: nil, context: nil, hints: nil) else { print("skip", path); continue }
    let w = cg.width, h = cg.height
    let ctx = CGContext(data: nil, width: w, height: h, bitsPerComponent: 8, bytesPerRow: 0, space: CGColorSpaceCreateDeviceGray(), bitmapInfo: CGImageAlphaInfo.none.rawValue)!
    ctx.setFillColor(gray: 1, alpha: 1); ctx.fill(CGRect(x: 0, y: 0, width: w, height: h))
    ctx.draw(cg, in: CGRect(x: 0, y: 0, width: w, height: h))
    if lift < 256 {   // push faint grey (left-over halo of removed ink) to white
        let p = ctx.data!.bindMemory(to: UInt8.self, capacity: ctx.bytesPerRow * h)
        for i in 0..<(ctx.bytesPerRow * h) where Int(p[i]) > lift { p[i] = 255 }
    }
    let rep = NSBitmapImageRep(cgImage: ctx.makeImage()!)
    let before = (try? FileManager.default.attributesOfItem(atPath: path)[.size] as? Int) ?? 0
    try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: path))
    let after = (try? FileManager.default.attributesOfItem(atPath: path)[.size] as? Int) ?? 0
    print(path.split(separator: "/").last!, before / 1024, "->", after / 1024, "KB")
}
