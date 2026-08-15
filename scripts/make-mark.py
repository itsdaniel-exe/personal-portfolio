"""
Generate public/remmate-mark.png from brand/remmate-logo.png.

The site paints the Remmate mark at 34px. The master artwork is large and sits
inside a lot of transparent padding, so used directly it renders as a speck and
ships a few hundred KB to do it. This crops the padding off, squares it up, and
downscales to 136px (4x, for retina).

The master lives in brand/ rather than public/ on purpose: everything in public/
is copied into dist/ and deployed, and there's no reason to ship 200+ KB of
source artwork nobody loads.

Run after replacing the master artwork:

    python scripts/make-mark.py

Requires Pillow:  pip install Pillow
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "brand" / "remmate-logo.png"
OUT = ROOT / "public" / "remmate-mark.png"
SIZE = 136  # 4x the 34px render size
ALPHA_FLOOR = 10  # ignore faint drop shadow when finding the real bounds


def main() -> None:
    src = Image.open(SRC).convert("RGBA")

    bbox = src.getchannel("A").point(lambda v: 255 if v > ALPHA_FLOOR else 0).getbbox()
    if bbox is None:
        raise SystemExit(f"{SRC.name} appears to be fully transparent.")

    mark = src.crop(bbox)
    w, h = mark.size

    # Square it off so the mark never distorts, whatever aspect it arrives in.
    side = max(w, h)
    canvas = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    canvas.paste(mark, ((side - w) // 2, (side - h) // 2), mark)

    canvas.resize((SIZE, SIZE), Image.LANCZOS).save(OUT, optimize=True)

    print(f"{SRC.name} {src.size} -> cropped {(w, h)} -> {OUT.name} {SIZE}x{SIZE}")
    print(f"{SRC.stat().st_size // 1024} KB -> {OUT.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
