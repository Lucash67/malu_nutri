import { site } from "../content";

export function Instagram() {
  return (
    <section className="ig" id="instagram">
      <div className="wrap">
        <div className="ig__panel ig__panel--simple" data-reveal>
          <div>
            <p className="kicker">Rotina</p>
            <h2 className="display">Quer acompanhar o dia a dia?</h2>
            <p className="lede" style={{ margin: "0.85rem 0 1rem" }}>
              O Instagram é onde a Malu publica o que está vivendo: aulas,
              treinos, alimentação e os bastidores. A página é o lugar para
              aprofundar. Lá é o lugar para acompanhar de perto.
            </p>
            <p className="ig__handle">{site.instagramHandle}</p>
            <div className="hero__actions">
              <a className="btn btn--light" href={site.instagram} target="_blank" rel="noreferrer">
                Acompanhar a rotina
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
