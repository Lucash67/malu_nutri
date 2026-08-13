const steps = [
  {
    title: "Aprendendo",
    text: "6º semestre de 8. Teoria, laboratório e o olhar clínico em construção.",
  },
  {
    title: "Praticando",
    text: "Estágio e vivências na área — contato com pessoas, rotina e decisão.",
  },
  {
    title: "Compartilhando",
    text: "Reels, rotina e o que a faculdade não cabe em um post só.",
  },
  {
    title: "Construindo",
    text: "Marca pessoal, parcerias e o profissional que está nascendo agora.",
  },
];

export function Now() {
  return (
    <section className="now" id="jornada">
      <div className="wrap">
        <div className="now__panel" data-reveal>
          <div>
            <p className="kicker">Neste capítulo</p>
            <h2 className="display">Construindo minha história na Nutrição.</h2>
            <p className="lede" style={{ marginTop: "0.85rem" }}>
              Não é um intervalo até o CRN. É o período em que a profissional
              começa a existir — estudando, errando, gravando, treinando e
              voltando para a próxima aula.
            </p>
          </div>
          <ol className="now__steps">
            {steps.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
