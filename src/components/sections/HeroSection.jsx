const PATTERN_TOP =
  "https://www.figma.com/api/mcp/asset/214ead78-46c9-4d5b-8c11-d2d0a10becbc.svg";

const PATTERN_BOTTOM =
  "https://www.figma.com/api/mcp/asset/14fee004-a573-440a-bd15-a35b43c833b5.svg";

export default function HeroSection() {
  return (
    <section
      className="figma-start"
      aria-label="INTERFACE 2026"
    >
      <div className="figma-start__canvas">

        {/* ================================
            BACKGROUND PATTERN
        ================================= */}
        {/* <div
          className="figma-start__pattern"
          aria-hidden="true"
        >
          <img
            className="figma-start__pattern-top"
            src={PATTERN_TOP}
            alt=""
          />

          <img
            className="figma-start__pattern-bottom"
            src={PATTERN_BOTTOM}
            alt=""
          />
        </div> */}


        {/* ================================
            LEFT PINK / PURPLE
        ================================= */}
        <div
          className="
            figma-start__neon
            figma-start__neon--pink
          "
          aria-hidden="true"
        />

        <div
          className="
            figma-start__neon
            figma-start__neon--purple
          "
          aria-hidden="true"
        />


        {/* ================================
            MAIN LOGO
        ================================= */}
        <div className="figma-start__main-logo">
          <img
            src="/Logo Interface w Border.svg"
            alt="INTERFACE 2026"
          />
        </div>


        {/* ================================
            BUILDING TERRAIN
            FULL VIEWPORT WIDTH
        ================================= */}
        <div className="figma-start__terrain">
          <img
            src="/building-terrain.svg"
            alt="Building Terrain: Hello World!"
          />
        </div>


        {/* ================================
            RIGHT YELLOW / BLUE
        ================================= */}
        <div
          className="
            figma-start__right-neon
            figma-start__right-neon--yellow
          "
          aria-hidden="true"
        />

        <div
          className="
            figma-start__right-neon
            figma-start__right-neon--blue
          "
          aria-hidden="true"
        />

      </div>
    </section>
  );
}