import { useState } from "react";
import { benefits } from "../content";
import { Media } from "./Media";

export function Partners() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section className="partners" id="beneficios">
      <div className="wrap">
        <div className="partners__head" data-reveal>
          <p className="kicker">Aproveitar</p>
          <h2 className="display">Cupons e recomendações da rotina.</h2>
          <p className="lede">
            Marcas que já entram no dia a dia da Malu. Cupom quando existe,
            visita quando aconteceu — sem vitrine agressiva.
          </p>
        </div>
        <div className="partners__grid">
          {benefits.map((item) => (
            <article className="partner" key={item.id} data-reveal>
              <Media
                src={item.img}
                alt={item.alt ?? item.name}
                placeholder={`${item.name} · foto de referência`}
                shape="square"
              />
              <div className="partner__body">
                <div className="partner__top">
                  <span>{item.tag}</span>
                  {item.handle ? <span>{item.handle}</span> : null}
                </div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
                {item.code ? (
                  <button className="coupon" type="button" onClick={() => copy(item.code!)}>
                    <span>
                      <small>
                        Cupom
                        {item.validity ? ` · ${item.validity}` : ""}
                      </small>
                      <b>{item.code}</b>
                    </span>
                    <em>{copied === item.code ? "copiado" : item.perk ?? "copiar"}</em>
                  </button>
                ) : item.perk ? (
                  <p className="edition__meta">{item.perk}</p>
                ) : null}
                {item.href ? (
                  <a className="partner__link" href={item.href} target="_blank" rel="noreferrer">
                    Conhecer ↗
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
