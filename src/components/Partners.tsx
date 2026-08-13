import { benefits } from "../content";
import { useCopyCode } from "../hooks/useCopyCode";

export function Partners() {
  const { copied, copy } = useCopyCode();

  return (
    <section className="partners" id="cupons">
      <div className="wrap">
        <div className="partners__head" data-reveal>
          <p className="kicker">Aproveitar</p>
          <h2 className="display">Os cupons da Malu.</h2>
          <p className="lede">Toque, copie, use. Sem enrolação.</p>
        </div>
        <div className="partners__grid">
          {benefits.map((item) => (
            <article className={`ticket${item.code ? " ticket--hot" : ""}`} key={item.id} data-reveal>
              <div className="ticket__top">
                {item.img ? (
                  <img src={item.img} alt={item.alt ?? item.name} />
                ) : (
                  <span className="ticket__mark" aria-hidden>
                    {item.name.slice(0, 1)}
                  </span>
                )}
                <div>
                  <span>{item.tag}</span>
                  <h3>{item.name}</h3>
                </div>
                {item.perk && item.code ? <em className="ticket__perk">{item.perk}</em> : null}
              </div>
              <p>{item.text}</p>
              {item.code ? (
                <button className="coupon coupon--xl" type="button" onClick={() => copy(item.code!)}>
                  <span>
                    <small>{copied === item.code ? "copiado · cola no checkout" : "toque para copiar"}</small>
                    <b>{item.code}</b>
                  </span>
                  <em>{copied === item.code ? "✓" : "copiar"}</em>
                </button>
              ) : (
                <p className="ticket__soon">Parceria de conteúdo — sem cupom (ainda).</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
