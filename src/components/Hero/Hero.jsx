import "../../blocks/hero.css";

import heroImage from "../../images/hero/hero_image.jpg";



function Hero() {
return (
    <section
      className="hero"
      id="inicio"
    >
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">
            Construimos proyectos con
            transparencia, calidad y
            cumplimiento real.
          </h1>

          <p className="hero__description">
          Cada proyecto representa una visión, una inversión y un legado. En Constructora Kali combinamos diseño, innovación y excelencia constructiva para crear espacios que destacan por su funcionalidad, estética y calidad. Nuestro compromiso es entregar obras ejecutadas con precisión, transparencia y una atención excepcional en cada detalle.
          </p>

          <div className="hero__buttons">
            <a
              href="#proyectos"
              className="hero__button hero__button_type_primary"
            >
              Ver proyectos
            </a>

            <a
              href="#contacto"
              className="hero__button hero__button_type_secondary"
            >
              Solicitar cotización
            </a>
          </div>
        </div>

        <div className="hero__image-container">
          <img
            src={heroImage}
            alt="Proyecto KALI"
            className="hero__image"
          />

          <div className="hero__overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;