import "../../blocks/projects.css";

import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import primavera1 from "../../images/projects/primavera/primavera_1.jpg";
import primavera2 from "../../images/projects/primavera/primavera_2.jpg";
import primavera3 from "../../images/projects/primavera/primavera_3.jpg";
import primavera4 from "../../images/projects/primavera/primavera_4.jpg";
import primavera5 from "../../images/projects/primavera/primavera_5.jpg";
import primavera6 from "../../images/projects/primavera/primavera_6.jpg";
import primavera7 from "../../images/projects/primavera/primavera_7.jpg";
import primavera71 from "../../images/projects/primavera/primavera_71.jpg";
import primavera8 from "../../images/projects/primavera/primavera_8.jpg";
import primavera9 from "../../images/projects/primavera/primavera_9.jpg";
import primavera10 from "../../images/projects/primavera/primavera_10.jpg";

function Projects() {
  const projects = [
{
  title: "Residencia Primavera",
  location: "Cuernavaca, Morelos",
  category: "Diseño y Construcción",
  description:
    "Proyecto residencial de alta gama enfocado en funcionalidad, diseño contemporáneo y acabados premium.",

  images: [
    primavera1,
    primavera2,
    primavera3,
    primavera4,
    primavera5,
    primavera6,
    primavera7,
    primavera71,
    primavera8,
    primavera9,
    primavera10,
  ],
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
              <ProjectCarousel
                images={project.images}
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