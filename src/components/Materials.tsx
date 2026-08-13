import { materials } from "../content";

export function Materials() {
  const ready = materials.length > 0;

  return (
    <section className="shelf" id="materiais">
      <div className="wrap">
        <div className="shelf__head" data-reveal>
          <p className="kicker">Explorar</p>
          <h2 className="display">Materiais para levar com você.</h2>
          <p className="lede">
            Guias, listas e conteúdos que não cabem num reel. Esta prateleira
            cresce com a formação da Malu — sem inventar o que ainda não existe.
          </p>
        </div>

        {ready ? (
          <div className="shelf__grid">
            {materials.map((item) => (
              <article className="edition" key={item.id} data-reveal>
                <div className="edition__cover">
                  {item.cover ? (
                    <img src={item.cover} alt="" />
                  ) : (
                    <span aria-hidden>{item.title.slice(0, 1)}</span>
                  )}
                </div>
                <div className="edition__body">
                  <p className="edition__for">{item.audience}</p>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  {item.price || item.note ? (
                    <p className="edition__meta">
                      {item.price}
                      {item.price && item.note ? " · " : ""}
                      {item.note}
                    </p>
                  ) : null}
                  {item.href ? (
                    <a className="partner__link" href={item.href}>
                      {item.cta ?? "Abrir material"} ↗
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="shelf__soon" data-reveal>
            <article className="edition edition--soon">
              <div className="edition__cover edition__cover--blank">
                <span>01</span>
              </div>
              <div className="edition__body">
                <p className="edition__for">Em breve</p>
                <h3>Um material para guardar</h3>
                <p>
                  Capa, para quem é e um jeito de levar. O conteúdo real entra
                  neste espaço — sem título inventado.
                </p>
              </div>
            </article>
            <article className="edition edition--soon">
              <div className="edition__cover edition__cover--blank edition__cover--alt">
                <span>02</span>
              </div>
              <div className="edition__body">
                <p className="edition__for">Em breve</p>
                <h3>Outro capítulo</h3>
                <p>
                  A estrutura já está pronta para e-books, PDFs, listas e
                  conteúdos em parceria.
                </p>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
}
