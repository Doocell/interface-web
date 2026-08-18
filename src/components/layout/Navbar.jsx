import {
  Link,
  NavLink,
} from "react-router-dom";

import "../../styles/landing-start.css";


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
  return (
    <header className="figma-navbar">

      <div className="figma-navbar__canvas">

        {/* LOGO */}

        <Link
          to="/"
          className="figma-navbar__brand"
          aria-label="INTERFACE 2026 Home"
        >
          <img
            src="/Logo Interface w Border.png"
            alt="INTERFACE 2026"
            draggable="false"
          />
        </Link>


        {/* NAVIGATION */}

        <nav
          className="figma-navbar__menu"
          aria-label="Main Navigation"
        >

          {navigation.map((item) => (
            <NavLink
              key={item.to}

              to={item.to}

              end={item.end}

              className={({ isActive }) =>
                [
                  "figma-navbar__link",
                  item.className,
                  isActive
                    ? "is-active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}


          {/* BUKU PANDUAN */}

          <NavLink
            to="/buku-panduan"

            className={({ isActive }) =>
              [
                "figma-navbar__guidebook",
                isActive
                  ? "is-active"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >

            <img
              className="figma-navbar__guidebook-bg"

              src="https://www.figma.com/api/mcp/asset/b8e61e81-3450-41ec-8108-48ad8316c2fa.svg"

              alt=""

              aria-hidden="true"

              draggable="false"
            />


            <span>
              BUKU PANDUAN
            </span>

          </NavLink>

        </nav>

      </div>

    </header>
  );
}