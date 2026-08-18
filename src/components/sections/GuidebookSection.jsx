import "../../styles/guidebook.css";

const PDF_URL = "";
const DRIVE_URL = "";

function GuidebookButton({
  href,
  variant,
  children,
}) {
  const enabled =
    typeof href === "string" &&
    href.trim().length > 0;

  return (
    <a
      href={
        enabled
          ? href
          : "#guidebook"
      }
      target={
        enabled
          ? "_blank"
          : undefined
      }
      rel={
        enabled
          ? "noreferrer"
          : undefined
      }
      className={`
        gbk-action
        gbk-action--${variant}
        ${enabled ? "" : "is-disabled"}
      `}
      aria-disabled={!enabled}
      onClick={(event) => {
        if (!enabled) {
          event.preventDefault();
        }
      }}
    >
      {children}
    </a>
  );
}

export default function GuidebookSection() {
  return (
    <section
      id="guidebook"
      className="gbk-section"
      aria-labelledby="gbk-title"
    >
      <div className="gbk-frame">

        {/* =========================
            TITLE
        ========================= */}

        <header className="gbk-heading">
          <h2 id="gbk-title">
            <span className="gbk-heading__big gbk-heading__yellow">
              B
            </span>

            <span className="gbk-heading__normal">
              UKU
            </span>

            <span className="gbk-heading__space">
              {" "}
            </span>

            <span className="gbk-heading__big gbk-heading__yellow">
              P
            </span>

            <span className="gbk-heading__normal">
              ANDUAN
            </span>
          </h2>
        </header>


        {/* =========================
            LEFT NEON
        ========================= */}

        <div
          className="gbk-left-neon"
          aria-hidden="true"
        >
          <span className="gbk-left-neon__pink" />

          <span className="gbk-left-neon__purple" />
        </div>


        {/* =========================
            RIGHT NEON
        ========================= */}

        <div
          className="gbk-right-neon"
          aria-hidden="true"
        >
          <span className="gbk-right-neon__yellow" />

          <span className="gbk-right-neon__blue" />
        </div>


        {/* =========================
            BOOK
        ========================= */}

        <div className="gbk-book">
          <img
            src="/guidebook-book.svg"
            alt="Buku Panduan INTERFACE"
            className="gbk-book__image"
            draggable="false"
          />
        </div>


        {/* =========================
            ACTION BUTTONS
        ========================= */}

        <div className="gbk-actions">
          <GuidebookButton
            href={PDF_URL}
            variant="pdf"
          >
            DOWNLOAD PDF
          </GuidebookButton>

          <GuidebookButton
            href={DRIVE_URL}
            variant="drive"
          >
            BUKA DRIVE
          </GuidebookButton>
        </div>


        {/* =========================
            PINK DECORATION
        ========================= */}

        <div
          className="gbk-corner"
          aria-hidden="true"
        >
          <span />
        </div>

      </div>
    </section>
  );
}