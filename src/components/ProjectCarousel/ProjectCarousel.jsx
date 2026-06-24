import useEmblaCarousel from "embla-carousel-react";

import { useCarousel } from "../../hooks/useCarousel";

import "../../blocks/project-carousel.css";

function ProjectCarousel({
  images,
}) {
  const [emblaRef, emblaApi] =
    useEmblaCarousel({
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
    <div className="project-carousel">
      <div
        className="project-carousel__viewport"
        ref={emblaRef}
      >
        <div className="project-carousel__container">
          {images.map(
            (image, index) => (
              <div
                key={index}
                className="project-carousel__slide"
              >
                <img
                  src={image}
                  alt={`Proyecto ${
                    index + 1
                  }`}
                  className="project-carousel__image"
                />
              </div>
            )
          )}
        </div>
      </div>

      <button
        className="project-carousel__button project-carousel__button_type_prev"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        ←
      </button>

      <button
        className="project-carousel__button project-carousel__button_type_next"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        →
      </button>
    </div>
  );
}

export default ProjectCarousel;