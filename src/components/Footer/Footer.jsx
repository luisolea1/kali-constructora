import "../../blocks/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">

        <div className="footer__column">
          <h2 className="footer__logo">
            KALI
          </h2>

          <p className="footer__copyright">
            © 2025 KALI Constructora.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">
            Navegación
          </h3>

          <a
            href="#inicio"
            className="footer__link"
          >
            Inicio
          </a>

          <a
            href="#acerca"
            className="footer__link"
          >
            Acerca de
          </a>

          <a
            href="#servicios"
            className="footer__link"
          >
            Servicios
          </a>

          <a
            href="#proyectos"
            className="footer__link"
          >
            Proyectos
          </a>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">
            Contacto
          </h3>

          <a
            href="tel:+527770000000"
            className="footer__link"
          >
            +52 777 000 0000
          </a>

          <a
            href="#"
            className="footer__link"
          >
            Instagram
          </a>

          <a
            href="#"
            className="footer__link"
          >
            Facebook
          </a>

          <a
            href="#"
            className="footer__link"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;