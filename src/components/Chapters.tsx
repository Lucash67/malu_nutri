type Chapter = {
  k: string;
  title: string;
  text: string;
  now?: boolean;
  future?: boolean;
};

const chapters: Chapter[] = [
  {
    k: "Hoje",
    title: "6/8",
    text: "Nutrição em formação. Estágio, conteúdo e rotina acontecendo juntos.",
    now: true,
  },
  {
    k: "Reta final",
    title: "8/8",
    text: "Fechar a grade. Continuar praticando. Seguir compartilhando.",
  },
  {
    k: "Nova etapa",
    title: "Formação",
    text: "O diploma chega. A marca, o olhar e a prática já terão começado antes.",
  },
  {
    k: "A escrever",
    title: "Próximos capítulos",
    text: "Ainda em aberto — de propósito.",
    future: true,
  },
];

export function Chapters() {
  return (
    <section className="chapters">
      <div className="wrap">
        <p className="kicker" data-reveal>
          Futuro
        </p>
        <h2 className="display" data-reveal>
          Essa história ainda está sendo escrita.
        </h2>
        <p className="lede" data-reveal>
          Seis de oito. Não é um gráfico de progresso — é o capítulo atual de
          alguém que já decidiu levar isso a sério.
        </p>
        <div className="chapters__path">
          {chapters.map((item) => (
            <article
              className={`chapter${item.now ? " is-now" : ""}${item.future ? " is-future" : ""}`}
              key={item.title}
              data-reveal
            >
              <span>{item.k}</span>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
              {item.now ? (
                <span className="progress" aria-hidden>
                  <i />
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
