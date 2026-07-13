#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

OUTPUT="buildwise-logo-300.png"
OUTPUT_2X="buildwise-logo-300-2x.png"
HTML_FILE="file://${SCRIPT_DIR}/logo-lockup.html"
SCALE=2

CHROME_PATHS=(
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  "/Applications/Chromium.app/Contents/MacOS/Chromium"
  "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary"
)

CHROME=""
for path in "${CHROME_PATHS[@]}"; do
  if [[ -x "$path" ]]; then
    CHROME="$path"
    break
  fi
done

if [[ -z "$CHROME" ]]; then
  echo "Error: Chrome/Chromium not found. Open logo-lockup.html in a browser and screenshot manually." >&2
  exit 1
fi

echo "Exporting logo at ${SCALE}x device scale..."
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor="${SCALE}" \
  --window-size=300,300 \
  --screenshot="$SCRIPT_DIR/$OUTPUT_2X" \
  "$HTML_FILE"

if [[ ! -f "$OUTPUT_2X" ]]; then
  echo "Error: 2x screenshot file not created." >&2
  exit 1
fi

echo "Downscaling to 300x300..."
sips -z 300 300 "$OUTPUT_2X" --out "$OUTPUT" >/dev/null

if [[ -f "$OUTPUT" ]]; then
  echo "Done: ${SCRIPT_DIR}/${OUTPUT}"
  echo "      (2x source: ${SCRIPT_DIR}/${OUTPUT_2X})"
else
  echo "Error: Downscale failed." >&2
  exit 1
fi
