import { site } from "../content";
import { ContactLink } from "./ContactLink";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <p className="footer__logo">Malu</p>
            <p className="nav__mark" style={{ display: "block", marginTop: "0.2rem" }}>
              Nutrição em formação
            </p>
          </div>
          <nav className="footer__links" aria-label="Rodapé">
            <a href="#sobre">Sobre</a>
            <a href="#relatos">Relatos</a>
            <a href="#explorar">Explorar</a>
            <a href="#beneficios">Benefícios</a>
            <ContactLink />
            <a href={site.instagram} target="_blank" rel="noreferrer">
              {site.instagramHandle}
            </a>
          </nav>
        </div>
        <p className="footer__note">
          Estudante de Nutrição — 6º semestre. Conteúdo educativo e informativo,
          sem recomendações clínicas individuais. Esta página não apresenta a
          Malu como nutricionista formada.
        </p>
      </div>
    </footer>
  );
}
