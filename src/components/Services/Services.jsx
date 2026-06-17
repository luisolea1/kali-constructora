import "../../blocks/services.css";

function Services() {
const services = [
    {
      title: "Diseño y Planificación",
      description:
        "Elaboración de planos arquitectónicos, estudios de viabilidad, presupuestos y cronogramas de obra.",
    },
    {
      title: "Construcción de Obras",
      description:
        "Desarrollo de proyectos residenciales, comerciales e industriales con altos estándares de calidad.",
    },
    {
      title: "Supervisión de Obra",
      description:
        "Dirección técnica, control de calidad, seguridad y administración de recursos.",
    },
    {
      title: "Remodelación",
      description:
        "Renovación de espacios interiores y exteriores, ampliaciones y adecuaciones.",
    },
    {
      title: "Instalaciones",
      description:
        "Sistemas eléctricos, hidráulicos, sanitarios, climatización y ventilación.",
    },
    {
      title: "Consultoría",
      description:
        "Asesoramiento técnico, optimización de costos y evaluación de riesgos.",
    },
  ];

  return (
    <section
      className="services"
      id="servicios"
    >
      <div className="services__content">
        <span className="services__label">
          NUESTROS SERVICIOS
        </span>

        <h2 className="services__title">
          Soluciones integrales para cada
          etapa de tu proyecto.
        </h2>

        <div className="services__grid">
          {services.map((service) => (
            <article
              key={service.title}
              className="services__card"
            >
              <h3 className="services__card-title">
                {service.title}
              </h3>

              <p className="services__card-description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;