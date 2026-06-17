import "../../blocks/projects.css";

function Projects() {
  const projects = [
    {
      title: "Residencia Premium",
      location: "Cuernavaca, Morelos",
      category: "Diseño y Construcción",
      description:
        "Proyecto residencial de alta gama enfocado en funcionalidad, diseño contemporáneo y acabados premium.",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    },
    {
      title: "Remodelación Comercial",
      location: "Ciudad de México",
      category: "Remodelación",
      description:
        "Renovación integral de espacios comerciales optimizando circulación, imagen y experiencia del usuario.",
      image:
        "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
    },
    {
      title: "Interiorismo Corporativo",
      location: "Morelos",
      category: "Diseño Interior",
      description:
        "Diseño y ejecución de espacios corporativos modernos alineados con la identidad empresarial.",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
  ];

  return (
    <section
      className="projects"
      id="proyectos"
    >
      <div className="projects__content">
        <span className="projects__label">
          PORTAFOLIO
        </span>

        <h2 className="projects__title">
          Proyectos destacados
        </h2>

        <div className="projects__gallery">
          {projects.map((project) => (
            <article
              key={project.title}
              className="projects__card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="projects__image"
              />

              <div className="projects__information">
                <div className="projects__header">
                  <h3 className="projects__card-title">
                    {project.title}
                  </h3>

                  <span className="projects__category">
                    {project.category}
                  </span>
                </div>

                <p className="projects__location">
                  {project.location}
                </p>

                <p className="projects__description">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;