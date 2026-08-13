import { Media } from "./Media";

const pieces: {
  tag: string;
  title: string;
  tone: "feature" | "stack" | "note" | "flip";
  img?: string;
  alt?: string;
  extra?: { src: string; alt: string };
  placeholder: string;
}[] = [
  {
    tag: "Comida",
    title: "Rotina de verdade",
    tone: "feature",
    img: "/images/refeicao.jpg",
    alt: "Prato da rotina: frango, batata, feijão, arroz e salada",
    extra: { src: "/images/lanche-fruta.jpg", alt: "Lanche da rotina: maçã com canela" },
    placeholder: "Foto da alimentação",
  },
  {
    tag: "Graduação",
    title: "Teoria virando conversa",
    tone: "stack",
    img: "/images/malu-estudo.jpg",
    alt: "Malu no quarto-escritório, estudando com o notebook aberto",
    placeholder: "Foto do estudo",
  },
  {
    tag: "Treino",
    title: "Beach tennis e constância",
    tone: "note",
    placeholder: "Beach tennis",
  },
  {
    tag: "Bastidores",
    title: "Entre um post e a aula",
    tone: "flip",
    img: "/images/lanche.jpg",
    alt: "Lanche da rotina na mão, entre o estudo e o dia",
    placeholder: "Foto dos bastidores",
  },
];

export function Share() {
  return (
    <section className="share" id="conteudos">
      <div className="wrap">
        <div className="share__head" data-reveal>
          <p className="kicker">O que ela vive</p>
          <h2 className="display">Nutrição na vida real.</h2>
        </div>
        <div className="share__list">
          {pieces.map((item) => (
            <article className={`share-card share-card--${item.tone}`} key={item.title} data-reveal>
              {item.tone !== "note" ? (
                <Media
                  src={item.img}
                  alt={item.alt}
                  extra={item.extra}
                  placeholder={item.placeholder}
                  shape={item.tone === "flip" ? "thumb" : "wide"}
                />
              ) : null}
              <div className="share-card__body">
                <p className="share-card__tag">{item.tag}</p>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
