from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ICON = ROOT / "public" / "TokenDesign_Icon_White.png"
APP_DIR = ROOT / "app"
PUBLIC_DIR = ROOT / "public"

BG_COLOR = (15, 23, 42, 255)  # #0F172A


def load_mark() -> Image.Image:
    icon = Image.open(SOURCE_ICON).convert("RGBA")
    alpha = icon.split()[-1]
    bbox = alpha.getbbox()
    if bbox:
        icon = icon.crop(bbox)
    return icon


def render_base(size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    corner = max(3, int(size * 0.22))
    inset = max(0, int(size * 0.035))
    rect = (inset, inset, size - inset - 1, size - inset - 1)

    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle(rect, radius=corner, fill=BG_COLOR)
    return canvas


def render_icon(mark: Image.Image, size: int) -> Image.Image:
    canvas = render_base(size)
    target = int(size * 0.58)
    ratio = min(target / mark.width, target / mark.height)
    scaled = mark.resize(
        (max(1, int(round(mark.width * ratio))), max(1, int(round(mark.height * ratio)))),
        Image.Resampling.LANCZOS,
    )

    x = (size - scaled.width) // 2
    y = (size - scaled.height) // 2
    canvas.alpha_composite(scaled, (x, y))
    return canvas


def main() -> None:
    APP_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    mark = load_mark()

    icon_512 = render_icon(mark, 512)
    icon_512.save(APP_DIR / "icon.png", format="PNG")

    apple_icon = render_icon(mark, 180)
    apple_icon.save(APP_DIR / "apple-icon.png", format="PNG")

    favicon_source = render_icon(mark, 256)
    favicon_source.save(
        APP_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    render_icon(mark, 16).save(PUBLIC_DIR / "favicon-16x16.png", format="PNG")
    render_icon(mark, 32).save(PUBLIC_DIR / "favicon-32x32.png", format="PNG")
    render_icon(mark, 180).save(PUBLIC_DIR / "apple-touch-icon.png", format="PNG")
    render_icon(mark, 192).save(PUBLIC_DIR / "android-chrome-192x192.png", format="PNG")
    render_icon(mark, 512).save(PUBLIC_DIR / "android-chrome-512x512.png", format="PNG")

    manifest = """{
  "name": "Opus",
  "short_name": "Opus",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0F172A",
  "background_color": "#0F172A",
  "display": "standalone"
}
"""
    (PUBLIC_DIR / "site.webmanifest").write_text(manifest, encoding="utf-8")

    print(
        "Generated app/favicon.ico, app/icon.png, app/apple-icon.png, and public favicon/manifest files"
    )


if __name__ == "__main__":
    main()
