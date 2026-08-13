import { stories } from "../content";
import { Compare } from "./Compare";

export function Stories() {
  const featured = stories.find((item) => item.featured) ?? stories[0];
  const ready = stories.length > 0;

  return (
    <section className="stories" id="relatos">
      <div className="wrap">
        <div className="stories__head" data-reveal>
          <p className="kicker">Relatos</p>
          <h2 className="display">O corpo muda. O recado fica.</h2>
          <p className="lede">Só entra com autorização. Nada inventado.</p>
        </div>

        {ready && featured ? (
          <div className="stories__stage">
            {featured.before && featured.after ? (
              <div data-reveal="scale">
                <Compare
                  before={featured.before}
                  after={featured.after}
                  beforeAlt={`${featured.name} · antes`}
                  afterAlt={`${featured.name} · depois`}
                />
              </div>
            ) : null}
            <article className="letter" data-reveal>
              <span className="seal" aria-hidden>
                M
              </span>
              <blockquote>
                <p>{featured.quote}</p>
              </blockquote>
              <footer>
                <strong>{featured.name}</strong>
                {featured.context ? <span>{featured.context}</span> : null}
              </footer>
            </article>
          </div>
        ) : (
          <div className="stories__wait" data-reveal>
            <div className="polaroids polaroids--mini" aria-hidden>
              <figure className="polaroid polaroid--before">
                <div className="polaroid__film">
                  <span className="polaroid__ghost" />
                </div>
                <figcaption>Antes</figcaption>
              </figure>
              <figure className="polaroid polaroid--after">
                <div className="polaroid__film">
                  <span className="polaroid__ghost" />
                </div>
                <figcaption>Depois</figcaption>
              </figure>
            </div>
            <p>As primeiras cartas ainda estão a caminho.</p>
          </div>
        )}
      </div>
    </section>
  );
}
