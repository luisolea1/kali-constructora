import "../../blocks/hero.css";


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
            Diseñamos, construimos y
            supervisamos proyectos
            residenciales, comerciales e
            industriales con un enfoque
            basado en la planeación, la
            confianza y la excelencia
            operativa.
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
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2"
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