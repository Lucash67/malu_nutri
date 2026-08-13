import { ContactLink } from "./ContactLink";

const map = [
  { href: "#sobre", label: "Conhecer", text: "a trajetória" },
  { href: "#explorar", label: "Explorar", text: "materiais e benefícios" },
  { href: "#relatos", label: "Relatos", text: "antes, depois, recados" },
  { href: "#contato", label: "Conversar", text: "com a Malu" },
];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap hero__stage">
        <div className="hero__frames">
          <figure className="hero__frame hero__frame--main">
            <img
              src="/images/malu-jaleco.jpg"
              alt="Maria Luiza de jaleco, nutricionista em formação"
            />
          </figure>
        </div>
        <div className="hero__copy">
          <p className="kicker">Estudante de Nutrição · 6º semestre</p>
          <h1 className="display">
            <span className="hero__hi">oi, eu sou a</span>
            Maria Luiza
          </h1>
          <p className="hero__pill">pode me chamar de Malu</p>
          <p className="lede">
            Compartilho o que vivo na graduação, no treino, na alimentação e nos
            bastidores de quem está construindo uma carreira em Nutrição — com o
            pé na vida real.
          </p>
          <div className="hero__actions">
            <ContactLink className="btn btn--solid" />
            <a className="btn btn--ghost" href="#explorar">
              Explorar por aqui
            </a>
          </div>
        </div>
      </div>
      <ul className="wrap hero__now" data-reveal>
        <li>
          <strong>6/8</strong>
          <span>semestres</span>
        </li>
        <li>
          <strong>Estágio</strong>
          <span>na prática</span>
        </li>
        <li>
          <strong>Beach tennis</strong>
          <span>atleta</span>
        </li>
        <li>
          <strong>Por aqui</strong>
          <span>hub da Malu</span>
        </li>
      </ul>
      <nav className="wrap hero__map" aria-label="O que você encontra aqui" data-reveal>
        {map.map((item) => (
          <a key={item.href} href={item.href}>
            <span>{item.label}</span>
            {item.text}
          </a>
        ))}
      </nav>
    </section>
  );
}
