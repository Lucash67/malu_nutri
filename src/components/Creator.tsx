import { site } from "../content";

export function Creator() {
  return (
    <section className="creator">
      <div className="wrap creator__layout">
        <figure className="creator__reel" data-reveal="scale">
          <img
            src="/images/lanche.jpg"
            alt="Lanche da rotina: comida de verdade, sem pose de dieta"
          />
        </figure>
        <div className="creator__copy" data-reveal>
          <p className="kicker">Criadora</p>
          <h2 className="display">Vamos falar sobre alimentação?</h2>
          <p className="lede">
            O Instagram mostra o dia. Esta página organiza o que fica: história,
            materiais, benefícios e um jeito de conversar.
          </p>
          <p className="lede">
            O tom é o dela — direto, informal, sem drama de dieta. “Exagerou no
            fim de semana? Não precisa compensar na segunda.” Esse tipo de
            conversa.
          </p>
          <div className="creator__note">
            <strong>Instagram × esta página</strong>
            Lá: rotina e conteúdo. Aqui: marca, aprofundamento e próximos
            passos.
          </div>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#materiais">
              Conhecer materiais
            </a>
            <a className="btn btn--ghost" href={site.instagram} target="_blank" rel="noreferrer">
              Ver a rotina
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
