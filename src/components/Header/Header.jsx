import { useState } from "react";
import "../../blocks/header.css";
import logo from "../../images/logo_kali.png";

const navigationLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Acerca de", href: "#acerca" },
  { name: "Servicios", href: "#servicios" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsMenuOpen(false);
        }
      }}
    >
      <div className="header__content">
        <a href="#inicio" className="header__logo-link">
          <img
            src={logo}
            alt="Constructora KALI"
            className="header__logo"
            width="400"
            height="120"
          />
        </a>

        <nav className="header__navigation" aria-label="Navegación principal">
          <ul className="header__list">
            {navigationLinks.map((link) => (
              <li key={link.name} className="header__item">
                <a
                  href={link.href}
                  className="header__link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="header__menu-button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span aria-hidden="true">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Navegación móvil"
        className={`header__mobile-menu ${
          isMenuOpen ? "header__mobile-menu_visible" : ""
        }`}
        hidden={!isMenuOpen}
      >
        <ul className="header__mobile-list">
          {navigationLinks.map((link) => (
            <li key={link.name} className="header__mobile-item">
              <a
                href={link.href}
                className="header__mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
