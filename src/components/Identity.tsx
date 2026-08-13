const traits = [
  {
    label: "Formação",
    text: "Estudante de Nutrição, transformando conhecimento em cuidado.",
  },
  {
    label: "Esporte",
    text: "Atleta de beach tennis, movida pelo esporte e pela superação.",
  },
  {
    label: "Clínica",
    text: "Encantada pela área clínica, onde cada detalhe faz diferença.",
  },
  {
    label: "Família",
    text: "Fascinada pela família, meu maior alicerce e inspiração.",
  },
  {
    label: "Mundo",
    text: "Apaixonada por natureza e viagens, explorando com propósito.",
  },
];

export function Identity() {
  return (
    <section className="identity" id="sobre">
      <div className="wrap identity__grid">
        <figure className="identity__photo" data-reveal="scale">
          <img
            src="/images/malu-retrato.jpg"
            alt="Malu, retrato"
          />
          <figcaption>Maria Luiza — mas pode me chamar de Malu.</figcaption>
        </figure>
        <div className="identity__intro" data-reveal>
          <p className="kicker">Quem é a Malu</p>
          <h2 className="display">Muito além da sala de aula.</h2>
          <p className="lede">
            A graduação é o eixo. O resto — treino, conteúdo, estágio, família —
            é o que torna essa formação uma história, e não só um currículo.
          </p>
          <div className="identity__traits">
            {traits.map((item) => (
              <article className="trait" key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="identity__quote">
            Para mim a alimentação é essencial, como chave para o bem-estar e a
            qualidade de vida.
          </p>
        </div>
      </div>
    </section>
  );
}
