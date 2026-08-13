import { ContactLink } from "./ContactLink";

const marks = ["HeyMu", "Life Slim", "Long Jack"];

export function Collab() {
  return (
    <section className="collab" id="parcerias">
      <div className="wrap collab__panel" data-reveal>
        <p className="kicker">Parcerias</p>
        <h2 className="display">Marcas, a Malu fecha.</h2>
        <p className="lede">Conteúdo, produto, evento. Se faz sentido na rotina dela, vamos conversar.</p>
        <ul className="collab__marks">
          {marks.map((name) => (
            <li key={name}>{name}</li>
          ))}
          <li className="collab__next">a sua?</li>
        </ul>
        <div className="hero__actions">
          <ContactLink className="btn btn--solid btn--shine" intent="partnership">
            Quero ser parceira
          </ContactLink>
          <a className="btn btn--ghost" href="#cupons">
            Ver cupons atuais
          </a>
        </div>
      </div>
    </section>
  );
}
