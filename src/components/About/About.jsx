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
  En Constructora KALI entendemos que cada proyecto representa una inversión
  importante y una responsabilidad que asumimos con profesionalismo. Por ello
  trabajamos con transparencia, disciplina y una ejecución meticulosa, cuidando
  cada detalle desde el diseño hasta la entrega final.
</p>

<p className="about__paragraph">
  No buscamos únicamente construir edificios o remodelar espacios; buscamos crear entornos que aporten valor, reflejen la identidad de nuestros clientes y permanezcan como un legado de calidad, funcionalidad y diseño.
</p>


        </div>
        <div className="about__image-container">
          <img
            src={aboutImage}
            alt="Detalle arquitectónico de un proyecto de Constructora KALI"
            className="about__image"
            width="874"
            height="1011"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
