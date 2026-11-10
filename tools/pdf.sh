#!/bin/sh
# Build the student handout PDF: node print.js -> dist/print.html -> student.pdf (two passes for page numbers).
# CHROME can point at any Chrome/Chromium binary; defaults to the usual macOS locations.
set -e
cd "$(dirname "$0")/.."
CHROME="${CHROME:-}"
for c in "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" "$HOME/Desktop/Google Chrome.app/Contents/MacOS/Google Chrome" "$HOME/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; do
  [ -z "$CHROME" ] && [ -x "$c" ] && CHROME="$c"
done
[ -x "$CHROME" ] || { echo "Chrome not found: set CHROME=/path/to/chrome" >&2; exit 1; }
[ tools/pdftext -nt tools/pdftext.swift ] || swiftc -O -o tools/pdftext tools/pdftext.swift
TMP="${TMPDIR:-/tmp}/cvs-print.$$"; mkdir -p "$TMP"
print() {
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 \
    --print-to-pdf="$1" "file://$PWD/dist/print.html" 2>/dev/null
}
tools/fonts.sh
node print.js
print "$TMP/pass1.pdf"
tools/pdftext "$TMP/pass1.pdf" > "$TMP/pass1.txt"
node tools/pages.js "$TMP/pass1.txt" > "$TMP/pages.json"
node print.js "$TMP/pages.json"
print student.pdf
tools/pdftext student.pdf > "$TMP/final.txt"
node tools/pages.js "$TMP/final.txt" --check "$TMP/pages.json"
# the PDF must embed the real fonts, not system fallbacks
for f in BaiJamjuree IBMPlexSans IBMPlexSansThai IBMPlexMono; do
  strings -n 6 student.pdf | grep -q "/BaseFont */[A-Z]*+$f" || { echo "font $f not embedded: web fonts failed to load" >&2; exit 4; }
done
# stamp the live link with the PDF hash so browsers fetch the new file instead of a cached one
V=$(shasum student.pdf | cut -c1-8)
sed -i '' -E "s#(cvs-peer-tutoring/student\.pdf)(\?v=[0-9a-f]+)?#\1?v=$V#g" README.md
echo "student.pdf version $V"
rm -rf "$TMP"
