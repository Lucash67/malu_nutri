import { ContactLink } from "./ContactLink";

export function Instagram() {
  return (
    <section className="ig" id="instagram">
      <div className="wrap">
        <div className="ig__panel ig__panel--simple" data-reveal>
          <div>
            <p className="kicker">Rotina</p>
            <h2 className="display">O dia a dia continua lá.</h2>
            <p className="lede" style={{ margin: "0.85rem 0 1rem" }}>
              Aulas, treinos, alimentação e bastidores saem no Instagram. Esta
              página é para aprofundar — e o WhatsApp, para conversar.
            </p>
            <div className="hero__actions">
              <ContactLink className="btn btn--light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
