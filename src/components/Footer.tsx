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
            <a href="#cupons">Cupons</a>
            <a href="#parcerias">Parcerias</a>
            <ContactLink />
          </nav>
        </div>
        <p className="footer__note">
          Estudante de Nutrição — 6º semestre. Conteúdo educativo. Esta página não apresenta a Malu
          como nutricionista formada.
        </p>
      </div>
    </footer>
  );
}
