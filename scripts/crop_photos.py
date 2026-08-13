from pathlib import Path

from PIL import Image

base = Path(r"C:\Users\lucas\.cursor\projects\c-Users-lucas-OneDrive-Desktop-Projeto-MaluNutri\assets")
out = Path(r"C:\Users\lucas\OneDrive\Desktop\Projeto_MaluNutri\public\images")
out.mkdir(parents=True, exist_ok=True)


def src(stamp: str) -> Path:
    matches = list(base.glob(f"*Captura_de_tela_2026-08-13_{stamp}*"))
    if not matches:
        raise FileNotFoundError(stamp)
    return matches[0]


def crop_frac(im: Image.Image, l: float, t: float, r: float, b: float) -> Image.Image:
    w, h = im.size
    box = (int(w * l), int(h * t), int(w * r), int(h * b))
    return im.crop(box).convert("RGB")


def save(im: Image.Image, name: str, quality: int = 88) -> None:
    path = out / name
    im.save(path, "JPEG", quality=quality, optimize=True)
    print(name, im.size)


jobs = [
    ("121421", (0.00, 0.00, 1.00, 0.88), "jaleco.jpg"),
    ("121345", (0.05, 0.16, 0.95, 0.58), "lifeslim.jpg"),
    ("121438", (0.00, 0.085, 1.00, 0.86), "estudo-uan.jpg"),
    ("123339", (0.00, 0.52, 1.00, 0.86), "cuscuz-estudo.jpg"),
    ("123416", (0.02, 0.09, 0.98, 0.62), "aula-simulacao.jpg"),
    ("123555", (0.00, 0.21, 1.00, 0.88), "unifor.jpg"),
    ("123615", (0.00, 0.00, 1.00, 1.00), "lanche.jpg"),
    ("123652", (0.18, 0.36, 0.88, 0.78), "heymu.jpg"),
    ("123717", (0.38, 0.42, 1.00, 0.88), "cafe.jpg"),
    ("123636", (0.28, 0.30, 0.95, 0.70), "heymu-pote.jpg"),
]

for stamp, frac, name in jobs:
    save(crop_frac(Image.open(src(stamp)), *frac), name)

print("done")
