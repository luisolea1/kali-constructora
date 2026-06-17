import "../../blocks/partners.css";

function Partners() {
  const partners = [
    "CEMEX",
    "HELVEX",
    "HOLCIM",
    "GERDAU",
    "VITRO",
  ];

  return (
    <section className="partners">
      <div className="partners__content">
        <span className="partners__label">
          ALIADOS ESTRATÉGICOS
        </span>

        <h2 className="partners__title">
          Empresas con las que hemos colaborado
        </h2>

        <div className="partners__grid">
          {partners.map((partner) => (
            <div
              key={partner}
              className="partners__item"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;