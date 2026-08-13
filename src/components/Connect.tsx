import { site } from "../content";
import { ContactLink } from "./ContactLink";

type Path =
  | { k: string; t: string; contact: true }
  | { k: string; t: string; href: string; external?: boolean };

const paths: Path[] = [
  { contact: true, k: "Conversar", t: "Falar com a Malu" },
  { href: "#conteudos", k: "Acompanhar", t: "O que ela compartilha" },
  { href: "#relatos", k: "Relatos", t: "Antes, depois e recados" },
  { href: "#materiais", k: "Explorar", t: "Materiais exclusivos" },
  { href: "#beneficios", k: "Aproveitar", t: "Cupons e benefícios" },
  { href: "#recomendacoes", k: "Indicar", t: "Recomendações" },
  { href: site.instagram, k: "Rotina", t: "Dia a dia no Instagram", external: true },
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
          A página é o hub. Escolhe o caminho que faz sentido agora — conversar,
          explorar ou só ficar perto da rotina.
        </p>
        <div className="connect__primary">
          <ContactLink className="btn btn--solid">Falar com a Malu</ContactLink>
        </div>
        <nav className="paths" aria-label="Caminhos">
          {paths.map((item) =>
            "contact" in item ? (
              <ContactLink key={item.t} className="paths__item">
                <span>{item.k}</span>
                <strong>{item.t}</strong>
              </ContactLink>
            ) : (
              <a
                key={item.t}
                className="paths__item"
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
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
