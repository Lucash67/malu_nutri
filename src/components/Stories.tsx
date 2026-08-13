import { stories, type Story } from "../content";
import { Compare } from "./Compare";

function MiniPair({ item }: { item: Story }) {
  if (!item.before || !item.after) return null;
  return (
    <div className="mini-pair">
      <img src={item.before} alt={`${item.name} · antes`} />
      <span aria-hidden>→</span>
      <img src={item.after} alt={`${item.name} · depois`} />
    </div>
  );
}

export function Stories() {
  const featured = stories.find((item) => item.featured) ?? stories[0];
  const notes = stories.filter((item) => item.id !== featured?.id);
  const ready = stories.length > 0;

  return (
    <section className="stories" id="relatos">
      <div className="wrap">
        <div className="stories__head" data-reveal>
          <p className="kicker">Relatos</p>
          <h2 className="display">O corpo muda. O recado fica.</h2>
          <p className="lede">
            Não é vitrine de milagre nem ranking de quilos. É correspondência
            autorizada — o antes e o depois do físico, e o que a pessoa quis
            escrever depois do cuidado. A Malu ainda está em formação: nada
            aqui finge diploma, clínica ou resultado prometido.
          </p>
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
              <p className="letter__mark">uma mensagem</p>
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
          <div className="stories__stage">
            <div className="polaroids" data-reveal="scale" aria-hidden>
              <span className="tape tape--a" />
              <span className="tape tape--b" />
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
              <p className="polaroids__hint">arraste para comparar · fotos com autorização</p>
            </div>
            <article className="letter letter--waiting" data-reveal>
              <span className="seal seal--open" aria-hidden>
                M
              </span>
              <p className="letter__mark">aguardando a primeira carta</p>
              <blockquote>
                <p>
                  Quando alguém autorizar, a mensagem entra aqui — no tom dela,
                  sem estrela, sem “perdi X quilos”, sem personagem inventado.
                </p>
              </blockquote>
              <footer>
                <strong className="letter__sign">Nome</strong>
                <span>Acompanhamento · com permissão</span>
              </footer>
            </article>
          </div>
        )}

        {ready && notes.length > 0 ? (
          <ul className="notes">
            {notes.map((item) => (
              <li key={item.id} data-reveal>
                <MiniPair item={item} />
                <blockquote>{item.quote}</blockquote>
                <p>
                  <strong>{item.name}</strong>
                  {item.context ? ` · ${item.context}` : ""}
                </p>
              </li>
            ))}
          </ul>
        ) : null}

        {!ready ? (
          <ul className="notes notes--ghost">
            <li data-reveal>
              <span>espaço para uma mensagem autorizada</span>
            </li>
            <li data-reveal>
              <span>espaço para uma mensagem autorizada</span>
            </li>
            <li data-reveal>
              <span>espaço para uma mensagem autorizada</span>
            </li>
          </ul>
        ) : null}

        <p className="stories__fine" data-reveal>
          Fotos e recados só entram com autorização. O slider de antes e depois
          ocupa o lugar dos polaroides assim que as imagens chegarem.
        </p>
      </div>
    </section>
  );
}
