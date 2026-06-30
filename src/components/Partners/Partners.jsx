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
          Empresas que confían en KALI
        </h2>

        <p className="partners__description">
        Trabajamos de la mano con organizaciones que comparten nuestra visión de calidad, diseño y compromiso con la excelencia.
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