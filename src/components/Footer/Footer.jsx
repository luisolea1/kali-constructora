import "../../blocks/footer.css";

function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/constructorakali_/",
    },
    {
      name: "Contacto",
      url: "https://wa.me/527771882476",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © 2026 CONSTRUCTORA KALI. TODOS LOS DERECHOS RESERVADOS.
        </p>

        <div className="footer__socials">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;