import { professionals, recommendations } from "../content";

export function Recommendations() {
  const hasLifestyle = recommendations.length > 0;
  const hasPros = professionals.length > 0;

  return (
    <section className="recs" id="recomendacoes">
      <div className="wrap">
        <div className="recs__head" data-reveal>
          <p className="kicker">Recomendações</p>
          <h2 className="display">O que ela escolhe indicar.</h2>
          <p className="lede">
            Coisas da rotina e, no tempo certo, profissionais de confiança.
            Nada entra aqui só para preencher.
          </p>
        </div>
        <div className="recs__split">
          <div className="recs__col" data-reveal>
            <h3>Da rotina</h3>
            <p>
              Alimentação, treino, estudo, lifestyle — o que ela realmente usa
              e quer indicar.
            </p>
            {hasLifestyle ? (
              <ul className="recs__list">
                {recommendations.map((item) => (
                  <li key={item.id}>
                    <span>{item.kind}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <strong>{item.name}</strong>
                    )}
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="recs__empty">A lista ainda está sendo escrita.</p>
            )}
          </div>
          <div className="recs__col" data-reveal>
            <h3>De profissionais</h3>
            <p>
              Uma rede futura: saúde, movimento, cuidado. Nomes reais, só quando
              existirem.
            </p>
            {hasPros ? (
              <ul className="recs__list">
                {professionals.map((item) => (
                  <li key={item.id}>
                    <span>{item.role}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    ) : (
                      <strong>{item.name}</strong>
                    )}
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="recs__empty">Nenhum nome por enquanto — de propósito.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
