#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

HTML="og-image.html"
OUTPUT="og-image.png"
OUTPUT_2X="og-image-2x.png"
OUTPUT_DEST="${2:-../client/public/og-image.png}"
SCALE=2
WIDTH=1200
HEIGHT=630

HTML_FILE="file://${SCRIPT_DIR}/${HTML}"

CHROME_PATHS=(
  "/usr/bin/google-chrome-stable"
  "/usr/bin/google-chrome"
  "/usr/bin/chromium"
  "/usr/bin/chromium-browser"
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  "/Applications/Chromium.app/Contents/MacOS/Chromium"
)

CHROME=""
for path in "${CHROME_PATHS[@]}"; do
  if [[ -x "$path" ]]; then
    CHROME="$path"
    break
  fi
done

if [[ -z "$CHROME" ]]; then
  echo "Error: Chrome/Chromium not found. Open ${HTML} in a browser and screenshot manually." >&2
  exit 1
fi

echo "Exporting OG image at ${SCALE}x device scale..."
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor="${SCALE}" \
  --window-size="${WIDTH},${HEIGHT}" \
  --screenshot="$SCRIPT_DIR/$OUTPUT_2X" \
  "$HTML_FILE"

if [[ ! -f "$OUTPUT_2X" ]]; then
  echo "Error: 2x screenshot file not created." >&2
  exit 1
fi

echo "Downscaling to ${WIDTH}x${HEIGHT}..."

if command -v convert >/dev/null 2>&1; then
  convert "$OUTPUT_2X" -resize "${WIDTH}x${HEIGHT}!" "$SCRIPT_DIR/$OUTPUT"
elif command -v magick >/dev/null 2>&1; then
  magick "$OUTPUT_2X" -resize "${WIDTH}x${HEIGHT}!" "$SCRIPT_DIR/$OUTPUT"
elif command -v sips >/dev/null 2>&1; then
  sips -z "$HEIGHT" "$WIDTH" "$OUTPUT_2X" --out "$SCRIPT_DIR/$OUTPUT" >/dev/null
elif python3 -c "from PIL import Image" >/dev/null 2>&1; then
  python3 -c "from PIL import Image; Image.open('$OUTPUT_2X').resize(($WIDTH, $HEIGHT), Image.LANCZOS).save('$SCRIPT_DIR/$OUTPUT')"
else
  cp "$OUTPUT_2X" "$SCRIPT_DIR/$OUTPUT"
  echo "Warning: no image resizer found; using 2x screenshot as output." >&2
fi

if [[ ! -f "$SCRIPT_DIR/$OUTPUT" ]]; then
  echo "Error: output file not created." >&2
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT_DEST")"
cp "$SCRIPT_DIR/$OUTPUT" "$OUTPUT_DEST"

echo "Done: ${OUTPUT_DEST}"
echo "      (2x source: ${SCRIPT_DIR}/${OUTPUT_2X})"
