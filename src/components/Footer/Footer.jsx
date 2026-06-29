import "../../blocks/footer.css";

function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/kaliconstructora",
    },
    {
      name: "Contacto",
      url: "https://wa.me/52XXXXXXXXXX",
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