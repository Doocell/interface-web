import "../../styles/timeline-section.css";

/*
 * FIGMA SOURCE
 * File : J1XqDOh4KLCNq2Ns9WjPyu
 * Node : 303:944
 *
 * Semua SVG di bawah adalah asset export langsung
 * dari node Figma tersebut.
 */

const ASSETS = {
  trackLeftRight:
    "https://www.figma.com/api/mcp/asset/37051bb4-8d40-4a8c-bdac-5293afdb4fb4.svg",

  trackMiddle:
    "https://www.figma.com/api/mcp/asset/fe5d248b-b676-46ab-8014-3a9e09c6db1f.svg",

  lineUp:
    "https://www.figma.com/api/mcp/asset/cea9c098-28e3-4823-a8aa-c40dae930f4d.svg",

  lineDown:
    "https://www.figma.com/api/mcp/asset/8601c963-bee3-42a8-8730-d168f63f6b97.svg",

  nodeOuter:
    "https://www.figma.com/api/mcp/asset/77c1f4a6-71c1-4487-a8bd-37d9cd0d662b.svg",

  nodeMiddle:
    "https://www.figma.com/api/mcp/asset/91dad085-a37f-408b-b5ad-b08bd54a4fbc.svg",

  nodeYellow:
    "https://www.figma.com/api/mcp/asset/5b7a6132-64ef-4c08-a662-340e5938061b.svg",

  nodePurple:
    "https://www.figma.com/api/mcp/asset/76dd80db-4698-4faa-bb4d-bf9ae0ee5d86.svg",

  nodePink:
    "https://www.figma.com/api/mcp/asset/2e027b36-9f51-4d4a-84c7-33f61f239242.svg",

  nodeBlue:
    "https://www.figma.com/api/mcp/asset/4517aea8-e7bf-42ca-85e6-a69f805f7ae3.svg",

  pinYellow:
    "https://www.figma.com/api/mcp/asset/30e569b9-452b-44ce-817a-494b59dcd08b.svg",

  cardYellow:
    "https://www.figma.com/api/mcp/asset/d08fc46e-607a-4304-9c5d-2e3d2dfd7987.svg",

  pinPink:
    "https://www.figma.com/api/mcp/asset/84f9807b-9ca0-4e02-bc56-209a0023b115.svg",

  cardPink:
    "https://www.figma.com/api/mcp/asset/9ed0ce0c-e990-41cf-9f97-9647a7ec1c3d.svg",

  pinPurple:
    "https://www.figma.com/api/mcp/asset/87235a61-d381-4c54-b424-e806d971234d.svg",

  cardPurple:
    "https://www.figma.com/api/mcp/asset/f117ca16-6217-4778-80ca-53e75a44fbaf.svg",

  pinBlue:
    "https://www.figma.com/api/mcp/asset/4ca39e14-2a36-459f-8a1a-2520748a8df8.svg",

  cardBlue:
    "https://www.figma.com/api/mcp/asset/674844b5-9b5b-4530-b7ff-374ab192e9ae.svg",

  titleUnderline:
    "https://www.figma.com/api/mcp/asset/3d971c04-6411-4441-a998-5c4b758934c3.svg",

  decorationX:
    "https://www.figma.com/api/mcp/asset/0bc00904-9df8-45a1-a914-9a750c741b01.svg",

  decorationTriangle:
    "https://www.figma.com/api/mcp/asset/a901e372-b0db-4635-aba1-18d422a91b92.svg",
};


function TimelineNode({ className, innerAsset }) {
  return (
    <div className={`timeline-node ${className}`}>
      <img
        className="timeline-node__outer"
        src={ASSETS.nodeOuter}
        alt=""
        draggable="false"
      />

      <img
        className="timeline-node__middle"
        src={ASSETS.nodeMiddle}
        alt=""
        draggable="false"
      />

      <div className="timeline-node__inner">
        <img
          src={innerAsset}
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
}


function TimelineCard({
  className,
  panel,
  pin,
  title,
  children,
}) {
  return (
    <div className={`timeline-card ${className}`}>
      <img
        className="timeline-card__pin"
        src={pin}
        alt=""
        draggable="false"
      />

      <div className="timeline-card__panel">
        <img
          src={panel}
          alt=""
          draggable="false"
        />
      </div>

      <div className="timeline-card__title">
        {title}
      </div>

      <div className="timeline-card__details">
        {children}
      </div>
    </div>
  );
}


export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="timeline-section"
      aria-label="Timeline Kegiatan"
    >
      {/* ==========================================
          DECORATION LEFT
      ========================================== */}

      <div
        className="timeline-decoration-triangle"
        aria-hidden="true"
      >
        <img
          src={ASSETS.decorationTriangle}
          alt=""
          draggable="false"
        />
      </div>


      {/* ==========================================
          DECORATION RIGHT
      ========================================== */}

      <div
        className="timeline-decoration-x"
        aria-hidden="true"
      >
        <img
          src={ASSETS.decorationX}
          alt=""
          draggable="false"
        />
      </div>


      {/* ==========================================
          1440PX FIGMA CANVAS
      ========================================== */}

      <div className="timeline-stage">

        {/* ========================================
            TITLE
        ======================================== */}

        <div className="timeline-heading">
          <h2>TIMELINE KEGIATAN</h2>

          <div className="timeline-heading__underline">
            <img
              src={ASSETS.titleUnderline}
              alt=""
              draggable="false"
            />
          </div>
        </div>


        {/* ========================================
            DARK ROAD / TRACK
        ======================================== */}

        <div
          className="
            timeline-track-piece
            timeline-track-piece--left
          "
        >
          <img
            src={ASSETS.trackLeftRight}
            alt=""
            draggable="false"
          />
        </div>


        <div
          className="
            timeline-track-piece
            timeline-track-piece--center
          "
        >
          <img
            src={ASSETS.trackMiddle}
            alt=""
            draggable="false"
          />
        </div>


        <div
          className="
            timeline-track-piece
            timeline-track-piece--right
          "
        >
          <img
            src={ASSETS.trackLeftRight}
            alt=""
            draggable="false"
          />
        </div>


        {/* ========================================
            WHITE DASH LINES
        ======================================== */}

        <div
          className="
            timeline-road-line
            timeline-road-line--one
          "
        >
          <div className="timeline-road-line__content">
            <img
              src={ASSETS.lineUp}
              alt=""
              draggable="false"
            />
          </div>
        </div>


        <div
          className="
            timeline-road-line
            timeline-road-line--two
          "
        >
          <div className="timeline-road-line__content">
            <img
              src={ASSETS.lineDown}
              alt=""
              draggable="false"
            />
          </div>
        </div>


        <div
          className="
            timeline-road-line
            timeline-road-line--three
          "
        >
          <div className="timeline-road-line__content">
            <img
              src={ASSETS.lineUp}
              alt=""
              draggable="false"
            />
          </div>
        </div>


        {/* ========================================
            NODE 1 — PINK
        ======================================== */}

        <TimelineNode
          className="timeline-node--one"
          innerAsset={ASSETS.nodePink}
        />


        {/* ========================================
            NODE 2 — PURPLE
        ======================================== */}

        <TimelineNode
          className="timeline-node--two"
          innerAsset={ASSETS.nodePurple}
        />


        {/* ========================================
            NODE 3 — BLUE
        ======================================== */}

        <TimelineNode
          className="timeline-node--three"
          innerAsset={ASSETS.nodeBlue}
        />


        {/* ========================================
            NODE 4 — YELLOW
        ======================================== */}

        <TimelineNode
          className="timeline-node--four"
          innerAsset={ASSETS.nodeYellow}
        />


        {/* ========================================
            PROLOGUE
        ======================================== */}

        <TimelineCard
          className="timeline-card--pink"
          panel={ASSETS.cardPink}
          pin={ASSETS.pinPink}
          title="PROLOGUE : PATCH NOTES!"
        >
          <p>
            Hari/Tanggal&nbsp;&nbsp;: Sabtu, 29 Agustus 2026
          </p>

          <p>
            Waktu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            19.00 s.d. 21.00 WIB
          </p>

          <p>
            Tempat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Zoom
          </p>
        </TimelineCard>


        {/* ========================================
            CHAPTER 1
        ======================================== */}

        <TimelineCard
          className="timeline-card--purple"
          panel={ASSETS.cardPurple}
          pin={ASSETS.pinPurple}
          title="CHAPTER 1 : SPAWN POINT"
        >
          <p>
            Hari/Tanggal&nbsp;&nbsp;: Minggu, 6 September 2026
          </p>

          <p>
            Waktu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            06.00 s.d. Selesai
          </p>

          <p>
            Tempat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Gedung D4 FMIPA, lantai 3
          </p>
        </TimelineCard>


        {/* ========================================
            CHAPTER 2
        ======================================== */}

        <TimelineCard
          className="timeline-card--blue"
          panel={ASSETS.cardBlue}
          pin={ASSETS.pinBlue}
          title="CHAPTER 2 : QUESTLINE PKMMPD"
        >
          <p>
            Hari/Tanggal&nbsp;&nbsp;: Minggu, 6 September 2026
          </p>

          <p>
            Waktu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            06.00 s.d. Selesai
          </p>

          <p>
            Tempat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Gedung D4 FMIPA, lantai 3
          </p>
        </TimelineCard>


        {/* ========================================
            NEXT CHAPTER
        ======================================== */}

        <TimelineCard
          className="timeline-card--yellow"
          panel={ASSETS.cardYellow}
          pin={ASSETS.pinYellow}
          title={
            <>
              NEXT CHAPTER :
              <br />
              INTO THE KOMPUTEK VERSE!
            </>
          }
        >
          <p>
            Hari/Tanggal&nbsp;&nbsp;: Jumat - Minggu, 11 - 13 September 2026
          </p>

          <p>
            Waktu&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            Jumat, pukul 13.00 s.d. Selesai
          </p>

          <p>
            Tempat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Yon Zipur 4
          </p>
        </TimelineCard>

      </div>
    </section>
  );
}