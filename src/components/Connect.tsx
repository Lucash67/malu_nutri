import { ContactLink } from "./ContactLink";

type Path =
  | { k: string; t: string; contact: true }
  | { k: string; t: string; href: string };

const paths: Path[] = [
  { contact: true, k: "WhatsApp", t: "Falar com a Malu" },
  { href: "#conteudos", k: "Acompanhar", t: "O que ela compartilha" },
  { href: "#relatos", k: "Relatos", t: "Antes, depois e recados" },
  { href: "#materiais", k: "Explorar", t: "Materiais exclusivos" },
  { href: "#beneficios", k: "Aproveitar", t: "Cupons e benefícios" },
  { href: "#recomendacoes", k: "Indicar", t: "Recomendações" },
];

export function Connect() {
  return (
    <section className="connect" id="contato">
      <div className="wrap" data-reveal>
        <p className="kicker" style={{ justifyContent: "center" }}>
          Próximo passo
        </p>
        <h2 className="display">Quer acompanhar essa jornada de perto?</h2>
        <p className="lede">
          A página é o hub. O próximo passo é conversar no WhatsApp — ou
          explorar o que já está por aqui.
        </p>
        <div className="connect__primary">
          <ContactLink className="btn btn--solid">Falar no WhatsApp</ContactLink>
        </div>
        <nav className="paths" aria-label="Caminhos">
          {paths.map((item) =>
            "contact" in item ? (
              <ContactLink key={item.t} className="paths__item">
                <span>{item.k}</span>
                <strong>{item.t}</strong>
              </ContactLink>
            ) : (
              <a key={item.t} className="paths__item" href={item.href}>
                <span>{item.k}</span>
                <strong>{item.t}</strong>
              </a>
            ),
          )}
        </nav>
      </div>
    </section>
  );
}
