#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

OUTPUT="linkedin-banner-charles.png"
HTML_FILE="file://${SCRIPT_DIR}/banner.html"

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
  echo "Error: Chrome/Chromium not found. Open banner.html in a browser and screenshot manually." >&2
  exit 1
fi

echo "Exporting banner to ${OUTPUT}..."
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --window-size=1584,396 \
  --screenshot="$SCRIPT_DIR/$OUTPUT" \
  "$HTML_FILE"

if [[ -f "$OUTPUT" ]]; then
  echo "Done: ${SCRIPT_DIR}/${OUTPUT}"
else
  echo "Error: Export failed — screenshot file not created." >&2
  exit 1
fi
