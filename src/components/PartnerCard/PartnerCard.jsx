import "../../blocks/partner-card.css";

function PartnerCard({ partner }) {
  return (
    <article className="partner-card">
      <img
        className="partner-card__logo"
        src={partner.logo}
        alt={partner.alt}
        loading="lazy"
        decoding="async"
      />
    </article>
  );
}

export default PartnerCard;
