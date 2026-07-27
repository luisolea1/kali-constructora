import useEmblaCarousel from "embla-carousel-react";

import { useCarousel } from "../../hooks/useCarousel";

import "../../blocks/project-carousel.css";

function ProjectCarousel({ images, projectTitle }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const {
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
  } = useCarousel(emblaApi);

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Galería de ${projectTitle}`}
    >
      <div
        className="project-carousel__viewport"
        ref={emblaRef}
      >
        <div className="project-carousel__container">
          {images.map((image, index) => (
            <div
              key={image}
              className="project-carousel__slide"
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${images.length}`}
            >
              <img
                src={image}
                alt={`${projectTitle}, imagen ${index + 1}`}
                className="project-carousel__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="project-carousel__button project-carousel__button_type_prev"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label={`Ver imagen anterior de ${projectTitle}`}
      >
        <span aria-hidden="true">←</span>
      </button>

      <button
        type="button"
        className="project-carousel__button project-carousel__button_type_next"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label={`Ver imagen siguiente de ${projectTitle}`}
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

export default ProjectCarousel;
