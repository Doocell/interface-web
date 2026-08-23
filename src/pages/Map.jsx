import { useState } from "react";
import BackgroundPattern from "../components/layout/BackgroundPattern";

/* ============================================================
   MAP DATA — titik-titik lokasi kegiatan Interface 2026
   Koordinat dalam persen relatif terhadap map container
============================================================ */
const LOCATIONS = {
  hari1: [
    {
      id: "reg",
      label: "Registrasi & Pembekalan",
      short: "Gedung D4",
      top: "18%",
      left: "48%",
      color: "#FF59FB",
      description: "Tempat registrasi peserta dan sesi pembekalan awal. Gedung D4 FMIPA, Lantai 3.",
    },
    {
      id: "icebreak",
      label: "Ice Breaking",
      short: "Lapangan",
      top: "42%",
      left: "30%",
      color: "#9513FF",
      description: "Area ice breaking dan perkenalan antar kelompok. Lapangan terbuka kampus.",
    },
    {
      id: "tour1",
      label: "City Tour — Pos 1",
      short: "Pos 1",
      top: "30%",
      left: "65%",
      color: "#189CF4",
      description: "Pos pertama City Tour. Tantangan trivia dan foto kreatif.",
    },
    {
      id: "tour2",
      label: "City Tour — Pos 2",
      short: "Pos 2",
      top: "60%",
      left: "55%",
      color: "#189CF4",
      description: "Pos kedua City Tour. Mini-game kelompok.",
    },
    {
      id: "tour3",
      label: "City Tour — Pos 3",
      short: "Pos 3",
      top: "70%",
      left: "25%",
      color: "#189CF4",
      description: "Pos ketiga dan terakhir City Tour. Checkpoint final.",
    },
  ],
  hari2: [
    {
      id: "pkmmpd",
      label: "Sesi PKMMPD",
      short: "Gedung D4",
      top: "20%",
      left: "50%",
      color: "#189CF4",
      description: "Ruang utama sesi PKMMPD. Gedung D4 FMIPA, Lantai 3.",
    },
    {
      id: "diskusi",
      label: "Diskusi Kelompok",
      short: "Lobby",
      top: "50%",
      left: "35%",
      color: "#FF59FB",
      description: "Area diskusi kelompok dan penyusunan presentasi.",
    },
    {
      id: "presentasi",
      label: "Ruang Presentasi",
      short: "Aula",
      top: "55%",
      left: "65%",
      color: "#9513FF",
      description: "Tempat presentasi hasil diskusi kelompok.",
    },
  ],
  makrab: [
    {
      id: "base",
      label: "Base Camp Utama",
      short: "Yon Zipur 4",
      top: "25%",
      left: "50%",
      color: "#FFD900",
      description: "Pusat kegiatan Malam Keakraban. Area utama Yon Zipur 4.",
      zone: "green",
    },
    {
      id: "api",
      label: "Api Unggun",
      short: "Area Tengah",
      top: "45%",
      left: "45%",
      color: "#FF6B35",
      description: "Lokasi api unggun dan sharing session malam hari.",
      zone: "green",
    },
    {
      id: "pentas",
      label: "Panggung Utama",
      short: "Panggung",
      top: "35%",
      left: "70%",
      color: "#FFD900",
      description: "Panggung pertunjukan seni dan kompetisi antar kelompok.",
      zone: "green",
    },
    {
      id: "kompetisi",
      label: "Arena Kompetisi",
      short: "Lapangan",
      top: "65%",
      left: "30%",
      color: "#FF3B3B",
      description: "Area kompetisi outdoor dan tantangan fisik kelompok.",
      zone: "red",
    },
    {
      id: "terlarang",
      label: "Zona Terbatas",
      short: "Area Militer",
      top: "75%",
      left: "70%",
      color: "#FF3B3B",
      description: "⚠️ Area ini adalah zona militer aktif. Dilarang masuk tanpa izin.",
      zone: "red",
    },
  ],
};

const TABS = [
  { key: "hari1", label: "Day 1", emoji: "📅", color: "#FF59FB" },
  { key: "hari2", label: "Day 2", emoji: "📅", color: "#189CF4" },
  { key: "makrab", label: "Makrab", emoji: "🌙", color: "#FFD900" },
];

/* ---- PIN SVG inline ---- */
function Pin({ color }) {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
      <ellipse cx="12" cy="30" rx="5" ry="2" fill="rgba(0,0,0,0.3)" />
      <path
        d="M12 0C6.48 0 2 4.48 2 10c0 7.5 10 22 10 22s10-14.5 10-22C22 4.48 17.52 0 12 0Z"
        fill={color}
      />
      <circle cx="12" cy="10" r="4" fill="rgba(255,255,255,0.85)" />
    </svg>
  );
}

/* ---- GRID BACKGROUND ---- */
function MapGrid() {
  return (
    <svg
      className="map-grid"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <defs>
        <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

export default function Map() {
  const [activeTab, setActiveTab] = useState("hari1");
  const [activePin, setActivePin] = useState(null);

  const locations = LOCATIONS[activeTab];
  const activeTabData = TABS.find((t) => t.key === activeTab);

  const isMakrab = activeTab === "makrab";

  return (
    <main
      className="map-page"
      style={{ paddingTop: "76px" }}
    >
      <style>{`
        /* ========== MAP PAGE ========== */
        .map-page {
          width: 100%;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        /* HERO */
        .map-hero {
          text-align: center;
          padding: 60px 24px 32px;
        }

        .map-hero__eyebrow {
          display: inline-block;
          font-family: 'Tektur', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #FFD900;
          background: rgba(255,217,0,0.12);
          border: 1px solid rgba(255,217,0,0.3);
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 20px;
        }

        .map-hero__title {
          font-family: 'Tektur', sans-serif;
          font-size: clamp(28px, 5.5vw, 60px);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 12px;
          text-shadow: 0 0 40px rgba(255,217,0,0.3);
        }

        .map-hero__title span {
          color: #FFD900;
        }

        .map-hero__subtitle {
          font-family: 'Sora', sans-serif;
          font-size: clamp(13px, 1.8vw, 15px);
          color: rgba(255,255,255,0.55);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* BODY */
        .map-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* TABS */
        .map-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .map-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 100px;
          background: rgba(255,255,255,0.07);
          border: 1.5px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.55);
          font-family: 'Tektur', sans-serif;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .map-tab:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
        }

        .map-tab.is-active {
          background: rgba(255,255,255,0.12);
          color: var(--tab-color);
          border-color: var(--tab-color);
          box-shadow: 0 0 20px rgba(255,255,255,0.05);
        }

        /* MAP WRAPPER */
        .map-wrapper {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 20px;
          align-items: start;
        }

        /* MAP CANVAS */
        .map-canvas {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          border-radius: 20px;
          overflow: hidden;
          border: 1.5px solid rgba(255,255,255,0.12);
          background: linear-gradient(135deg, #1a1040 0%, #251850 50%, #1a1040 100%);
        }

        /* Road/path visual */
        .map-canvas::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 50% 100%, rgba(149,19,255,0.1) 0%, transparent 60%),
            radial-gradient(ellipse at 0% 50%, rgba(255,89,251,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        /* PIN */
        .map-pin {
          position: absolute;
          transform: translate(-50%, -100%);
          cursor: pointer;
          transition: transform 0.2s ease, filter 0.2s ease;
          z-index: 10;
        }

        .map-pin:hover {
          transform: translate(-50%, -100%) scale(1.25);
          filter: drop-shadow(0 4px 12px rgba(255,255,255,0.2));
        }

        .map-pin.is-active {
          transform: translate(-50%, -100%) scale(1.3);
          filter: drop-shadow(0 6px 16px rgba(255,255,255,0.3));
          z-index: 20;
        }

        .map-pin__label {
          position: absolute;
          bottom: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10,5,30,0.9);
          color: #fff;
          font-family: 'Tektur', sans-serif;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
          padding: 3px 8px;
          border-radius: 6px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.15s;
        }

        .map-pin:hover .map-pin__label,
        .map-pin.is-active .map-pin__label {
          opacity: 1;
        }

        /* ZONE indicator on makrab */
        .map-pin__zone {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -25%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          opacity: 0.15;
          pointer-events: none;
          z-index: -1;
        }

        /* SIDEBAR */
        .map-sidebar {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .map-info-card {
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 18px;
          transition: border-color 0.2s;
        }

        .map-info-card.is-active {
          border-color: var(--pin-color);
          box-shadow: 0 0 20px rgba(255,255,255,0.04);
        }

        .map-info-card__title {
          font-family: 'Tektur', sans-serif;
          font-size: 14px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 6px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .map-info-card__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .map-info-card__desc {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          line-height: 1.55;
          margin: 0;
        }

        .map-info-card__zone-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
          font-family: 'Tektur', sans-serif;
          font-size: 10px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 100px;
        }

        /* LEGEND */
        .map-legend {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 16px;
          padding: 12px 16px;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
        }

        .map-legend__title {
          font-family: 'Tektur', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 700;
          letter-spacing: 1px;
          margin-right: 4px;
        }

        .map-legend__item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.6);
        }

        .map-legend__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .map-wrapper {
            grid-template-columns: 1fr;
          }

          .map-canvas {
            aspect-ratio: 4/3;
          }

          .map-hero {
            padding: 40px 20px 24px;
          }
        }
      `}</style>

      {/* HERO */}
      <header className="map-hero">
        <span className="map-hero__eyebrow">📍 Interface 2026</span>
        <h1 className="map-hero__title">
          LOCATION <span>MAP</span>
        </h1>
        <p className="map-hero__subtitle">
          Peta interaktif lokasi kegiatan Interface 2026. Pilih hari untuk melihat pos dan lokasi masing-masing.
        </p>
      </header>

      {/* BODY */}
      <div className="map-body">
        {/* TABS */}
        <div className="map-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`map-tab ${activeTab === tab.key ? "is-active" : ""}`}
              style={{ "--tab-color": tab.color }}
              onClick={() => {
                setActiveTab(tab.key);
                setActivePin(null);
              }}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* MAP + SIDEBAR */}
        <div className="map-wrapper">
          {/* MAP CANVAS */}
          <div className="map-canvas">
            <MapGrid />

            {locations.map((loc) => (
              <button
                key={loc.id}
                className={`map-pin ${activePin === loc.id ? "is-active" : ""}`}
                style={{
                  top: loc.top,
                  left: loc.left,
                  "--pin-color": loc.color,
                  background: "none",
                  border: "none",
                  padding: 0,
                }}
                onClick={() => setActivePin(activePin === loc.id ? null : loc.id)}
                title={loc.label}
              >
                <span className="map-pin__label">{loc.short}</span>
                {isMakrab && loc.zone && (
                  <div
                    className="map-pin__zone"
                    style={{ background: loc.zone === "red" ? "#FF3B3B" : "#00FF88" }}
                  />
                )}
                <Pin color={loc.color} />
              </button>
            ))}
          </div>

          {/* SIDEBAR */}
          <div className="map-sidebar">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className={`map-info-card ${activePin === loc.id ? "is-active" : ""}`}
                style={{ "--pin-color": loc.color }}
                onClick={() => setActivePin(activePin === loc.id ? null : loc.id)}
              >
                <div className="map-info-card__title">
                  <span className="map-info-card__dot" style={{ background: loc.color }} />
                  {loc.label}
                </div>
                <p className="map-info-card__desc">{loc.description}</p>

                {isMakrab && loc.zone && (
                  <span
                    className="map-info-card__zone-tag"
                    style={{
                      background: loc.zone === "red" ? "rgba(255,59,59,0.15)" : "rgba(0,255,136,0.1)",
                      color: loc.zone === "red" ? "#FF6B6B" : "#00E87A",
                      border: `1px solid ${loc.zone === "red" ? "rgba(255,59,59,0.3)" : "rgba(0,255,136,0.2)"}`,
                    }}
                  >
                    {loc.zone === "red" ? "🔴 Zona Merah" : "🟢 Zona Hijau"}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* LEGEND for makrab */}
        {isMakrab && (
          <div className="map-legend">
            <span className="map-legend__title">LEGENDA</span>
            <div className="map-legend__item">
              <span className="map-legend__dot" style={{ background: "#00E87A" }} />
              Zona Hijau — Boleh diakses peserta
            </div>
            <div className="map-legend__item">
              <span className="map-legend__dot" style={{ background: "#FF3B3B" }} />
              Zona Merah — Terbatas / dilarang masuk
            </div>
          </div>
        )}
      </div>
    </main>
  );
}