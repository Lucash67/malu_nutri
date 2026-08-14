const points = [
  {
    tag: "Agora",
    title: "6 de 8",
    text: "Graduação, estágio e conteúdo no mesmo dia. Este é o capítulo atual.",
  },
  {
    tag: "Em breve",
    title: "A reta final",
    text: "Dois semestres pela frente. Continuar praticando e compartilhando.",
  },
  {
    tag: "Pela frente",
    title: "Depois do diploma",
    text: "A profissional que já está nascendo.",
  },
  {
    tag: "A escrever",
    title: "O que ainda se abre",
    text: "Próximos capítulos em aberto. De propósito.",
  },
];

export function Ground() {
  return (
    <section className="ground" id="por-aqui">
      <div className="wrap">
        <div className="ground__head" data-reveal>
          <p className="kicker">O caminho</p>
          <h2 className="display">Meu andamento. O que vem pela frente.</h2>
          <p className="lede">A história está sendo escrita agora — sem pular o capítulo.</p>
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
