import { ContactLink } from "./ContactLink";

export function Connect() {
  return (
    <section className="connect" id="contato">
      <div className="wrap connect__panel" data-reveal>
        <p className="kicker" style={{ justifyContent: "center" }}>
          Próximo passo
        </p>
        <h2 className="display">Bora conversar?</h2>
        <p className="lede">Dúvida, papo ou ideia de collab. O WhatsApp está aberto.</p>
        <div className="connect__primary">
          <ContactLink className="btn btn--solid btn--shine">Falar no WhatsApp</ContactLink>
        </div>
        <nav className="connect__alts" aria-label="Outros caminhos">
          <a href="#cupons">Cupons</a>
          <a href="#parcerias">Parcerias</a>
          <ContactLink intent="partnership">Fechar collab</ContactLink>
        </nav>
      </div>
    </section>
  );
}
