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
node print.js
print "$TMP/pass1.pdf"
tools/pdftext "$TMP/pass1.pdf" > "$TMP/pass1.txt"
node tools/pages.js "$TMP/pass1.txt" > "$TMP/pages.json"
node print.js "$TMP/pages.json"
print student.pdf
tools/pdftext student.pdf > "$TMP/final.txt"
node tools/pages.js "$TMP/final.txt" --check "$TMP/pages.json"
rm -rf "$TMP"
