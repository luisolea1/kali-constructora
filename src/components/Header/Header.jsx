import { useEffect, useRef, useState } from "react";
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const lastScrollPosition = useRef(0);

  useEffect(() => {
    let animationFrameId;

    const updateHeader = () => {
      const currentScrollPosition = Math.max(window.scrollY, 0);
      const scrollDifference = currentScrollPosition - lastScrollPosition.current;

      setIsScrolled(currentScrollPosition > 24);

      if (currentScrollPosition < 80) {
        setIsHeaderVisible(true);
      } else if (Math.abs(scrollDifference) > 6) {
        setIsHeaderVisible(scrollDifference < 0);
      }

      lastScrollPosition.current = currentScrollPosition;
      animationFrameId = undefined;
    };

    const handleScroll = () => {
      if (!animationFrameId) {
        animationFrameId = window.requestAnimationFrame(updateHeader);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    const sections = navigationLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0, 0.2, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const headerClassName = [
    "header",
    isScrolled ? "header_scrolled" : "",
    !isHeaderVisible && !isMenuOpen ? "header_hidden" : "",
    isMenuOpen ? "header_menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header
      className={headerClassName}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setIsMenuOpen(false);
        }
      }}
    >
      <div className="header__content">
        <a
          href="#inicio"
          className="header__logo-link"
          aria-label="Constructora KALI, ir al inicio"
        >
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
                  className={`header__link ${
                    activeSection === link.href.slice(1)
                      ? "header__link_active"
                      : ""
                  }`}
                  aria-current={
                    activeSection === link.href.slice(1) ? "page" : undefined
                  }
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
          onClick={() => {
            setIsHeaderVisible(true);
            setIsMenuOpen((isOpen) => !isOpen);
          }}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="header__menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
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
                className={`header__mobile-link ${
                  activeSection === link.href.slice(1)
                    ? "header__mobile-link_active"
                    : ""
                }`}
                aria-current={
                  activeSection === link.href.slice(1) ? "page" : undefined
                }
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
