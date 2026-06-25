import "../../blocks/projects.css";

import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import primavera from "../../data/projects/primavera";

function Projects() {
const projects = [primavera];

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