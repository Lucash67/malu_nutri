import { Media } from "./Media";

const items = [
  {
    k: "Graduação",
    title: "6º de 8",
    img: "/images/unifor.jpg",
    alt: "Malu apresentando no auditório da Unifor",
    placeholder: "Graduação",
  },
  {
    k: "Prática",
    title: "Simulação clínica",
    img: "/images/aula-simulacao.jpg",
    alt: "Aula de simulação clínica na graduação de Nutrição",
    placeholder: "Aula prática",
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
            <article className="practice__item" key={item.k} data-reveal>
              <Media src={item.img} alt={item.alt} placeholder={item.placeholder} shape="thumb" />
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
