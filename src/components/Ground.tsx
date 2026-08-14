const points = [
  {
    tag: "Ainda não",
    title: "Atendimento",
    text: "Sem consulta, sem consultório, sem CRN. Ela está no 6º semestre.",
  },
  {
    tag: "Já tem",
    title: "A formação em público",
    text: "Aula, comida de verdade e o que a faculdade vira conversa.",
  },
  {
    tag: "Já tem",
    title: "Cupons da rotina",
    text: "Marcas que ela usa de verdade — toque, copie, use.",
  },
  {
    tag: "Aberto",
    title: "Um papo no WhatsApp",
    text: "Dúvida, ideia de collab ou só um oi. Sem promessa de consulta.",
  },
];

export function Ground() {
  return (
    <section className="ground" id="por-aqui">
      <div className="wrap">
        <div className="ground__head" data-reveal>
          <p className="kicker">Com o pé no chão</p>
          <h2 className="display">O que tem por aqui — e o que ainda não.</h2>
          <p className="lede">Em formação. Sem antes e depois, sem resultado prometido.</p>
        </div>
        <div className="ground__list">
          {points.map((item) => (
            <article className="ground-card" key={item.title} data-reveal>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
