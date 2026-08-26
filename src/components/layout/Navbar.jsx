import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import navbarBackground from "../../assets/layout/navbar-background.svg";
import guidebookButton from "../../assets/layout/guidebook-button.svg";

import "../../styles/landing-start.css";
import "../../styles/navbar.css";


const navigation = [
  {
    label: "Information",
    to: "/info",
    className: "nav-information",
  },
  {
    label: "Timeline",
    to: "/timeline",
    className: "nav-timeline",
  },
  {
    label: "Leaderboard",
    to: "/leaderboard",
    className: "nav-leaderboard",
  },
  {
    label: "Vote",
    to: "/vote",
    className: "nav-vote",
  },
  {
    label: "Map",
    to: "/map",
    className: "nav-map",
  },
  {
    label: "Game Description",
    to: "/game-description",
    className: "nav-game-description",
  },
  {
    label: "Quest Collect",
    to: "/quest-collect",
    className: "nav-quest-collect",
  },
  {
    label: "FAQ",
    to: "/faq",
    className: "nav-faq",
  },
];


export default function Navbar() {
  const location = useLocation();
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1280px)");

    const handleDesktopChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    desktopMedia.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMedia.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const menuLinks = Array.from(
      menuRef.current?.querySelectorAll("a[href]") ?? [],
    );

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      menuLinks[0]?.focus();
    });

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();

        requestAnimationFrame(() => {
          toggleRef.current?.focus();
        });

        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = [
        toggleRef.current,
        ...menuLinks,
      ].filter(Boolean);

      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement?.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="figma-navbar">
      <img
        className="figma-navbar__background"
        src={navbarBackground}
        alt=""
        aria-hidden="true"
        draggable="false"
      />

      <div className="figma-navbar__canvas">
        <Link
          to="/"
          className="figma-navbar__brand"
          aria-label="INTERFACE 2026 Home"
          onClick={closeMenu}
        >
          <img
            src="/Logo Interface w Border.png"
            alt="INTERFACE 2026"
            draggable="false"
          />
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="figma-navbar__toggle"
          aria-label={
            isMenuOpen
              ? "Tutup menu navigasi"
              : "Buka menu navigasi"
          }
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setIsMenuOpen((currentValue) => !currentValue);
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav
          ref={menuRef}
          id="primary-navigation"
          className={`figma-navbar__menu${
            isMenuOpen ? " is-open" : ""
          }`}
          aria-label="Navigasi utama"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  "figma-navbar__link",
                  item.className,
                  isActive ? "is-active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/buku-panduan"
            className={({ isActive }) =>
              [
                "figma-navbar__guidebook",
                isActive ? "is-active" : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
            onClick={closeMenu}
          >
            <img
              className="figma-navbar__guidebook-bg"
              src={guidebookButton}
              alt=""
              aria-hidden="true"
              draggable="false"
            />

            <span>BUKU PANDUAN</span>
          </NavLink>
        </nav>
      </div>

      <button
        type="button"
        tabIndex={-1}
        className={`figma-navbar__backdrop${
          isMenuOpen ? " is-open" : ""
        }`}
        aria-label="Tutup menu navigasi"
        onClick={closeMenu}
      />
    </header>
  );
}