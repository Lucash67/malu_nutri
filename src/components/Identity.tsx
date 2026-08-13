const traits = [
  { label: "Formação", text: "Nutrição · 6º / 8" },
  { label: "Esporte", text: "Beach tennis" },
  { label: "Olhar", text: "Área clínica" },
  { label: "Base", text: "Família" },
  { label: "Mundo", text: "Natureza e viagens" },
];

export function Identity() {
  return (
    <section className="identity" id="sobre">
      <div className="wrap identity__grid">
        <figure className="identity__photo" data-reveal="scale">
          <img src="/images/malu-retrato.jpg" alt="Malu, retrato" />
        </figure>
        <div className="identity__intro" data-reveal>
          <p className="kicker">Quem é a Malu</p>
          <h2 className="display">Além da sala de aula.</h2>
          <p className="lede">Graduação no eixo. Treino, conteúdo e estágio no mesmo dia.</p>
          <div className="identity__traits">
            {traits.map((item) => (
              <article className="trait" key={item.label}>
                <strong>{item.label}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="identity__quote">Alimentação como chave — não como punição.</p>
        </div>
      </div>
    </section>
  );
}
