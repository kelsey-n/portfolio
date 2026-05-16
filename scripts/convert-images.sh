#!/bin/bash
# Converts all PNG/JPG → WebP and GIF → WebM + MP4
# Run from the repo root: bash scripts/convert-images.sh
# Prerequisites: brew install ffmpeg webp

IMAGES_DIR="static/images"
WEBP_QUALITY=85
GIF_CRF=33

echo "=== Converting PNG/JPG → WebP ==="
while IFS= read -r -d $'\0' file; do
  base="${file%.*}"
  output="${base}.webp"
  if [ -f "$output" ]; then
    echo "  skip (exists): $(basename "$output")"
  else
    cwebp -q $WEBP_QUALITY "$file" -o "$output" 2>/dev/null
    if [ -f "$output" ] && [ -s "$output" ]; then
      original_size=$(du -sh "$file" | cut -f1)
      new_size=$(du -sh "$output" | cut -f1)
      echo "  ✓ $(basename "$file") ($original_size) → $(basename "$output") ($new_size)"
    else
      echo "  ✗ Failed: $(basename "$file")"
      rm -f "$output"
    fi
  fi
done < <(find "$IMAGES_DIR" \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -print0)

echo ""
echo "=== Converting GIF → WebM + MP4 ==="
while IFS= read -r -d $'\0' file; do
  base="${file%.gif}"
  webm_out="${base}.webm"
  mp4_out="${base}.mp4"

  if [ -f "$webm_out" ] && [ -s "$webm_out" ]; then
    echo "  skip (exists): $(basename "$webm_out")"
  else
    rm -f "$webm_out"
    ffmpeg -i "$file" \
      -vf "fps=15,scale=trunc(iw/2)*2:trunc(ih/2)*2" \
      -c:v libvpx-vp9 -b:v 0 -crf $GIF_CRF -pix_fmt yuva420p -an \
      "$webm_out" -y -loglevel error < /dev/null
    if [ -f "$webm_out" ] && [ -s "$webm_out" ]; then
      original_size=$(du -sh "$file" | cut -f1)
      new_size=$(du -sh "$webm_out" | cut -f1)
      echo "  ✓ $(basename "$file") ($original_size) → $(basename "$webm_out") ($new_size)"
    else
      echo "  ✗ WebM failed: $(basename "$file")"
      rm -f "$webm_out"
    fi
  fi

  if [ -f "$mp4_out" ] && [ -s "$mp4_out" ]; then
    echo "  skip (exists): $(basename "$mp4_out")"
  else
    rm -f "$mp4_out"
    ffmpeg -i "$file" \
      -vf "fps=15,scale=trunc(iw/2)*2:trunc(ih/2)*2" \
      -c:v libx264 -pix_fmt yuv420p -an \
      "$mp4_out" -y -loglevel error < /dev/null
    if [ -f "$mp4_out" ] && [ -s "$mp4_out" ]; then
      echo "  ✓ $(basename "$file") → $(basename "$mp4_out") (MP4)"
    else
      echo "  ✗ MP4 failed: $(basename "$file")"
      rm -f "$mp4_out"
    fi
  fi
done < <(find "$IMAGES_DIR" -name "*.gif" -print0)

echo ""
echo "=== Done! ==="
