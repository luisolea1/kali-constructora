import { useState } from 'react';
import "../../blocks/header.css";
import logo from "../../images/logo_kali.png";

function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const navigationLinks = [
{
    name: "Inicio",
    href: "#inicio",
    },
    {
    name: "Acerca de",
    href: "#acerca",
    },
    {
    name: "Servicios",
    href: "#servicios",
    },
    {
    name: "Proyectos",
    href: "#proyectos",
    },
    {
    name: "Contacto",
    href: "#contacto",
    },
];


return (
    <header className="header">
    <div className="header__content">
        <a href="#inicio" className="header__logo-link">
        <img
            src={logo}
            alt="Logo KALI"
            className="header__logo"
        />
        </a>

        <nav className="header__navigation">
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
        className="header__menu-button"
        onClick={() =>
            setIsMenuOpen(!isMenuOpen)
        }
        aria-label="Abrir menú"
        >
        ☰
        </button>
    </div>

      <div
        className={`header__mobile-menu ${
          isMenuOpen
            ? "header__mobile-menu_visible"
            : ""
        }`}
      >
        <ul className="header__mobile-list">
          {navigationLinks.map((link) => (
            <li
              key={link.name}
              className="header__mobile-item"
            >
              <a
                href={link.href}
                className="header__mobile-link"
                onClick={() =>
                  setIsMenuOpen(false)
                }
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;