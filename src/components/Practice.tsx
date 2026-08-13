import { Media } from "./Media";

const items: {
  k: string;
  title: string;
  text: string;
  img?: string;
  alt?: string;
  placeholder: string;
}[] = [
  {
    k: "Graduação",
    title: "6º semestre de 8",
    text: "Em andamento. O conhecimento vai virando critério — e o critério vai virando jeito de olhar a comida.",
    img: "/images/unifor.jpg",
    alt: "Malu apresentando no auditório da Unifor",
    placeholder: "Foto da graduação",
  },
  {
    k: "Aula prática",
    title: "Simulação e o olhar clínico",
    text: "Ver na prática o que a teoria descreve. Ainda formando — e já no campo, inclusive em aula de simulação.",
    img: "/images/aula-simulacao.jpg",
    alt: "Aula de simulação clínica na graduação de Nutrição",
    placeholder: "Foto da aula prática",
  },
  {
    k: "Indústria",
    title: "Bastidores de verdade",
    text: "Visita à fábrica da Long Jack | União Vegetal | Biodis. Ver de perto o que depois aparece no conteúdo.",
    placeholder: "Visita à fábrica · foto de referência",
  },
];

export function Practice() {
  return (
    <section className="practice">
      <div className="wrap">
        <div className="practice__head" data-reveal>
          <p className="kicker">Na prática</p>
          <h2 className="display">Aprendendo também fora da grade.</h2>
          <p className="lede">
            A formação não espera o diploma. Estágio, visitas, conteúdo e o
            esporte já fazem parte de como a Malu se constrói como profissional.
          </p>
        </div>
        <div className="practice__mosaic">
          {items.map((item) => (
            <article className="practice__item" key={item.k} data-reveal>
              <Media src={item.img} alt={item.alt} placeholder={item.placeholder} />
              <span>{item.k}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
