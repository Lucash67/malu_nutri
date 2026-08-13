import { useEffect, useState } from "react";
import { site } from "../content";
import { ContactLink } from "./ContactLink";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#jornada", label: "Jornada" },
  { href: "#explorar", label: "Explorar" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="wrap nav__bar">
        <a className="nav__brand" href="#inicio" onClick={() => setOpen(false)}>
          <span className="nav__logo">Malu</span>
          <span className="nav__mark">Nutrição em formação</span>
        </a>
        <nav className="nav__links" aria-label="Seções">
          {links.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <ContactLink className="btn btn--solid nav__cta" />
        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
      <div className="wrap nav__drawer">
        {links.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <ContactLink onClick={() => setOpen(false)} />
        <a href={site.instagram} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          {site.instagramHandle}
        </a>
      </div>
    </header>
  );
}
