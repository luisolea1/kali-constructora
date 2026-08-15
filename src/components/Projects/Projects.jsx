import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion } from "motion/react";

import "../../blocks/projects.css";

import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import projects from "../../data/projects";

function ProjectCard({ project, isRevealed = false }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.article
      className="projects__card"
      initial={
        prefersReducedMotion
          ? false
          : { opacity: 0, y: isRevealed ? 32 : 48 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: isRevealed ? 0.58 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      }}
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
    </m.article>
  );
}

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const collapseTargetRef = useRef(null);
  const moreButtonRef = useRef(null);
  const collapseCleanupRef = useRef(() => {});
  const featuredProjects = projects.slice(0, 2);
  const additionalProjects = projects.slice(2);

  useEffect(() => () => collapseCleanupRef.current(), []);

  const finishCollapse = () => {
    setShowAllProjects(false);

    window.requestAnimationFrame(() => {
      moreButtonRef.current?.focus({ preventScroll: true });
    });
  };

  const handleProjectsToggle = () => {
    if (!showAllProjects) {
      setShowAllProjects(true);
      return;
    }

    collapseCleanupRef.current();

    if (prefersReducedMotion) {
      collapseTargetRef.current?.scrollIntoView({ block: "center" });
      finishCollapse();
      return;
    }

    let fallbackTimerId;
    let hasFinished = false;

    const completeCollapse = () => {
      if (hasFinished) return;

      hasFinished = true;
      window.removeEventListener("scrollend", completeCollapse);
      window.clearTimeout(fallbackTimerId);
      collapseCleanupRef.current = () => {};
      finishCollapse();
    };

    collapseCleanupRef.current = () => {
      window.removeEventListener("scrollend", completeCollapse);
      window.clearTimeout(fallbackTimerId);
    };

    window.addEventListener("scrollend", completeCollapse, { once: true });
    fallbackTimerId = window.setTimeout(completeCollapse, 1200);

    collapseTargetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

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

        <div
          ref={collapseTargetRef}
          className="projects__collapse-target"
          aria-hidden="true"
        />

        {additionalProjects.length > 0 && (
          <>
            <div
              className={`projects__more-control ${
                showAllProjects ? "projects__more-control_expanded" : ""
              }`}
            >
              <button
                ref={moreButtonRef}
                type="button"
                className="projects__more-button"
                onClick={handleProjectsToggle}
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
