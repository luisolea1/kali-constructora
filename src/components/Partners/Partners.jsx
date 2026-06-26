import "../../blocks/partners.css";

import partners from "../../data/partners";
import PartnerCard from "../PartnerCard/PartnerCard";

function Partners() {
  return (
    <section
      className="partners"
      id="aliados"
    >
      <div className="partners__content">
        <span className="partners__label">
          ALIADOS ESTRATÉGICOS
        </span>

        <div className="partners__divider"></div>

        <h2 className="partners__title">
          Empresas que han confiado en nuestro trabajo
        </h2>

        <p className="partners__description">
          Hemos colaborado con empresas privadas e instituciones públicas,
          desarrollando proyectos con el mismo compromiso, calidad y
          profesionalismo que caracteriza a KALI.
        </p>

        <div className="partners__grid">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;