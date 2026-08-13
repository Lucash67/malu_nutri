import { Media } from "./Media";

const pieces: {
  tag: string;
  title: string;
  text: string;
  img?: string;
  alt?: string;
  extra?: { src: string; alt: string };
  placeholder: string;
}[] = [
  {
    tag: "Alimentação sem complicação",
    title: "Comida de verdade no dia a dia",
    text: "Escolhas reais, sem regra impossível. O que cabe na rotina — inclusive o whey ice cream no fim de semana.",
    img: "/images/refeicao.jpg",
    alt: "Prato da rotina: frango, batata, feijão, arroz e salada",
    extra: {
      src: "/images/lanche-fruta.jpg",
      alt: "Lanche da rotina: maçã com canela",
    },
    placeholder: "Foto da alimentação",
  },
  {
    tag: "O que descubro na graduação",
    title: "Entre a teoria e a vida real",
    text: "Anotações, laboratório, o porquê de ter escolhido Nutrição. O que a faculdade ensina quando vira conversa.",
    img: "/images/malu-estudo.jpg",
    alt: "Malu no quarto-escritório, estudando com o notebook aberto",
    placeholder: "Foto do estudo",
  },
  {
    tag: "Fitness e equilíbrio",
    title: "Beach tennis, treino e constância",
    text: "Esporte como energia, não só estética. HYROX, quadra de areia e o copo de lei antes do treino.",
    placeholder: "Beach tennis · foto de referência",
  },
  {
    tag: "Bastidores da formação",
    title: "Aulas, estágio e o próximo conteúdo",
    text: "O que acontece entre um post e o outro: faculdade, prática e a construção silenciosa de uma carreira.",
    img: "/images/cuscuz-estudo.jpg",
    alt: "Cuscuz com frango ao lado do caderno de inflamação e ômega-3",
    placeholder: "Foto dos bastidores",
  },
];

export function Share() {
  return (
    <section className="share" id="conteudos">
      <div className="wrap">
        <div className="share__head" data-reveal>
          <div>
            <p className="kicker">O que eu compartilho</p>
            <h2 className="display">Nutrição na vida real.</h2>
          </div>
          <p className="lede">
            Quatro frentes que se misturam no Instagram e se organizam aqui:
            estudar, viver, treinar e mostrar o processo.
          </p>
        </div>
        <div className="share__list">
          {pieces.map((item) => (
            <article className="share-card" key={item.title} data-reveal>
              <Media
                src={item.img}
                alt={item.alt}
                extra={item.extra}
                placeholder={item.placeholder}
              />
              <div className="share-card__body">
                <p className="share-card__tag">{item.tag}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
