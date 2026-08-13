import { ContactLink } from "./ContactLink";

const pulse = [
  { k: "6/8", t: "semestres" },
  { k: "Estágio", t: "na prática" },
  { k: "Beach tennis", t: "atleta" },
  { k: "Cupons", t: "pra usar agora" },
];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__stage">
        <div className="hero__copy">
          <p className="kicker">Nutrição · 6º semestre</p>
          <h1 className="display">
            <span className="hero__hi">oi, eu sou a</span>
            Maria Luiza
          </h1>
          <p className="hero__pill">pode me chamar de Malu</p>
          <p className="lede">Comida de verdade, faculdade e treino — sem pose de dieta.</p>
          <div className="hero__actions">
            <ContactLink className="btn btn--solid btn--shine" />
            <a className="btn btn--ghost" href="#cupons">
              Pegar os cupons
            </a>
          </div>
        </div>
        <div className="hero__frames">
          <div className="hero__stack">
            <figure className="hero__shot hero__shot--main">
              <img
                src="/images/malu-jaleco.jpg"
                alt="Maria Luiza de jaleco, nutricionista em formação"
              />
            </figure>
            <figure className="hero__shot hero__shot--detail">
              <img
                src="/images/malu-jaleco-detalhe.jpg"
                alt="Jaleco bordado: M. Luiza Pinheiro, Nutrição"
              />
              <figcaption>
                <small>no jaleco</small>
                M. Luiza Pinheiro
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <ul className="wrap hero__now" data-reveal>
        {pulse.map((item) => (
          <li key={item.k}>
            <strong>{item.k}</strong>
            <span>{item.t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
