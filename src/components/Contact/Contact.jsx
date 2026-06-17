import "../../blocks/contact.css";

function Contact() {
  return (
    <section
      className="contact"
      id="contacto"
    >
      <div className="contact__content">
        <h2 className="contact__title">
          Inicia tu próximo proyecto con KALI
        </h2>

        <p className="contact__description">
          Construimos espacios con
          transparencia, calidad y
          cumplimiento real.
        </p>

        <a
          href="https://wa.me/5217770000000"
          target="_blank"
          rel="noreferrer"
          className="contact__button"
        >
          Solicitar cotización
        </a>
      </div>
    </section>
  );
}

export default Contact;