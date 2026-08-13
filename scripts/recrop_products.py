from pathlib import Path

from PIL import Image

base = Path(r"C:\Users\lucas\.cursor\projects\c-Users-lucas-OneDrive-Desktop-Projeto-MaluNutri\assets")
out = Path(r"C:\Users\lucas\OneDrive\Desktop\Projeto_MaluNutri\public\images")


def src(stamp: str) -> Path:
    matches = list(base.glob(f"*Captura_de_tela_2026-08-13_{stamp}*"))
    if not matches:
        raise FileNotFoundError(stamp)
    return matches[0]


def crop_frac(im: Image.Image, l: float, t: float, r: float, b: float) -> Image.Image:
    w, h = im.size
    box = (int(w * l), int(h * t), int(w * r), int(h * b))
    return im.crop(box).convert("RGB")


def save(im: Image.Image, name: str) -> None:
    path = out / name
    im.save(path, "JPEG", quality=90, optimize=True)
    print(name, im.size)


# Pote inteiro na mão, sem o recorte colado no rótulo
save(crop_frac(Image.open(src("123636")), 0.12, 0.22, 0.98, 0.80), "heymu-pote.jpg")
# Garrafa inteira o bastante para ler LIFE SLIM, sem os stickers de baixo
save(crop_frac(Image.open(src("121345")), 0.00, 0.07, 1.00, 0.72), "lifeslim.jpg")
print("done")
