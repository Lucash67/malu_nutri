from pathlib import Path

from PIL import Image

base = Path(r"C:\Users\lucas\.cursor\projects\c-Users-lucas-OneDrive-Desktop-Projeto-MaluNutri\assets")
out = Path(r"C:\Users\lucas\OneDrive\Desktop\Projeto_MaluNutri\public\images")
out.mkdir(parents=True, exist_ok=True)


def pick(part: str) -> Path:
    matches = [p for p in base.glob("*WhatsApp_Image_2026-08-13*") if part in p.name]
    if len(matches) != 1:
        raise FileNotFoundError(f"{part}: {matches}")
    return matches[0]


def save(src: Path, name: str, box=None) -> None:
    im = Image.open(src).convert("RGB")
    if box:
        w, h = im.size
        l, t, r, b = box
        im = im.crop((int(w * l), int(h * t), int(w * r), int(h * b)))
    dest = out / name
    im.save(dest, "JPEG", quality=90, optimize=True)
    print(name, im.size)


save(pick("14.28.51__3_"), "malu-retrato.jpg")
save(pick("14.28.51__1_"), "malu-estudo.jpg", (0.02, 0.0, 0.98, 0.92))
save(pick("14.28.52"), "malu-jaleco.jpg", (0.06, 0.02, 0.94, 0.92))
print("done")
