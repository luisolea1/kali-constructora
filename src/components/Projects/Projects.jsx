import { useState } from "react";

import "../../blocks/projects.css";

import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import projects from "../../data/projects";

function ProjectCard({ project, isRevealed = false }) {
  return (
    <article
      className={`projects__card ${isRevealed ? "projects__card_revealed" : ""}`}
    >
      <ProjectCarousel
        images={project.images}
        projectTitle={project.title}
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
  );
}

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const featuredProjects = projects.slice(0, 2);
  const additionalProjects = projects.slice(2);

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
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {additionalProjects.length > 0 && (
          <>
            <div className="projects__more-control">
              <button
                type="button"
                className="projects__more-button"
                onClick={() => setShowAllProjects((isVisible) => !isVisible)}
                aria-expanded={showAllProjects}
                aria-controls="additional-projects"
              >
                <span>{showAllProjects ? "Ver menos" : "Ver más"}</span>
                <span
                  className={`projects__more-icon ${
                    showAllProjects ? "projects__more-icon_expanded" : ""
                  }`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>
            </div>

            <div
              id="additional-projects"
              className="projects__gallery projects__gallery_additional"
              hidden={!showAllProjects}
            >
              {showAllProjects &&
                additionalProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    isRevealed
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
