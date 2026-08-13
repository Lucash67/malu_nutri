import { ContactLink } from "./ContactLink";

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
            O dia a dia acontece no Instagram. Esta página organiza o que fica:
            história, materiais, benefícios e um jeito de conversar.
          </p>
          <p className="lede">
            O tom é o dela — direto, informal, sem drama de dieta. “Exagerou no
            fim de semana? Não precisa compensar na segunda.” Esse tipo de
            conversa.
          </p>
          <div className="creator__note">
            <strong>Por aqui × conversa</strong>
            Aqui: marca, aprofundamento e próximos passos. Para falar com a
            Malu, o caminho é o WhatsApp.
          </div>
          <div className="hero__actions">
            <ContactLink className="btn btn--solid" />
            <a className="btn btn--ghost" href="#materiais">
              Conhecer materiais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
