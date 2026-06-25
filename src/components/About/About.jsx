import "../../blocks/about.css";
import aboutImage from "../../images/about/about_image.jpg";

function About() {
  return (
    <section
      className="about"
      id="acerca"
    >


<div className="about__content">
        <div className="about__text">
          <h2 className="about__title">
            Nuestra filosofía
          </h2>

          <p className="about__paragraph">
            En KALI creemos que una obra
            exitosa no solo se mide por
            el resultado final, sino por
            la experiencia completa del
            cliente durante todo el
            proceso.
          </p>

          <ul className="about__values">
            <li className="about__value">
              Cumplimiento real
            </li>

            <li className="about__value">
              Transparencia total
            </li>

            <li className="about__value">
              Calidad garantizada
            </li>

            <li className="about__value">
              Comunicación constante
            </li>
          </ul>
        </div>
        <div className="about__image-container">
          <img
            src={aboutImage}
            alt="Equipo KALI"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;