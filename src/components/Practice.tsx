import { Media } from "./Media";

const items: {
  k: string;
  title: string;
  tone: "cover" | "stack" | "plain";
  img?: string;
  alt?: string;
  placeholder: string;
}[] = [
  {
    k: "Graduação",
    title: "6º de 8",
    tone: "cover",
    img: "/images/unifor.jpg",
    alt: "Malu apresentando no auditório da Unifor",
    placeholder: "Graduação",
  },
  {
    k: "Prática",
    title: "Simulação clínica",
    tone: "stack",
    img: "/images/aula-simulacao.jpg",
    alt: "Aula de simulação clínica na graduação de Nutrição",
    placeholder: "Aula prática",
  },
  {
    k: "Indústria",
    title: "Bastidores reais",
    tone: "plain",
    placeholder: "Fábrica",
  },
];

export function Practice() {
  return (
    <section className="practice">
      <div className="wrap">
        <div className="practice__head" data-reveal>
          <p className="kicker">Na prática</p>
          <h2 className="display">Aprendendo fora da grade.</h2>
        </div>
        <div className="practice__mosaic">
          {items.map((item) => (
            <article className={`practice__item practice__item--${item.tone}`} key={item.k} data-reveal>
              {item.tone !== "plain" ? (
                <Media src={item.img} alt={item.alt} placeholder={item.placeholder} shape="thumb" />
              ) : null}
              <div>
                <span>{item.k}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
