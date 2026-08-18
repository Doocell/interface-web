import { useState } from "react";

const QUESTS = [
  {
    id: 1,
    chapter: "PROLOGUE",
    color: "#FF59FB",
    glow: "rgba(255,89,251,0.35)",
    border: "rgba(255,89,251,0.4)",
    title: "Patch Notes!",
    badge: "ONLINE",
    badgeColor: "#FF59FB",
    date: "Sabtu, 29 Agustus 2026",
    time: "19.00 – 21.00 WIB",
    place: "Zoom",
    description:
      "Sesi pembukaan online Interface 2026. Dapatkan informasi awal, perkenalan tim, dan pengumuman penting sebelum kegiatan inti dimulai.",
    quests: [
      { label: "Hadir di sesi Zoom", points: 100 },
      { label: "Perkenalkan diri di chat", points: 50 },
      { label: "Screenshot sesi & upload ke story", points: 75 },
    ],
    totalXP: 225,
  },
  {
    id: 2,
    chapter: "CHAPTER 1",
    color: "#9513FF",
    glow: "rgba(149,19,255,0.35)",
    border: "rgba(149,19,255,0.4)",
    title: "Spawn Point",
    badge: "DAY 1",
    badgeColor: "#9513FF",
    date: "Minggu, 6 September 2026",
    time: "06.00 WIB – Selesai",
    place: "Gedung D4 FMIPA, Lantai 3",
    description:
      "Hari pertama kegiatan offline Interface 2026. Ice Breaking, pengenalan lingkungan kampus, dan pembentukan kelompok. Mulailah perjalananmu!",
    quests: [
      { label: "Check-in di pos registrasi", points: 100 },
      { label: "Selesaikan sesi ice breaking", points: 150 },
      { label: "Foto bersama kelompok di Gedung D4", points: 75 },
      { label: "Upload kegiatan ke media sosial", points: 100 },
    ],
    totalXP: 425,
  },
  {
    id: 3,
    chapter: "CHAPTER 2",
    color: "#189CF4",
    glow: "rgba(24,156,244,0.35)",
    border: "rgba(24,156,244,0.4)",
    title: "Questline PKMMPD",
    badge: "DAY 2",
    badgeColor: "#189CF4",
    date: "Minggu, 6 September 2026",
    time: "06.00 WIB – Selesai",
    place: "Gedung D4 FMIPA, Lantai 3",
    description:
      "Rangkaian kegiatan PKMMPD (Pengenalan Kehidupan Mahasiswa Matematika dan Data). Selesaikan misi-misi kelompok dan kumpulkan XP sebanyak-banyaknya!",
    quests: [
      { label: "Ikuti semua sesi PKMMPD", points: 200 },
      { label: "Selesaikan misi kelompok", points: 150 },
      { label: "Aktif bertanya / berpendapat", points: 100 },
      { label: "Bantu sesama peserta", points: 75 },
    ],
    totalXP: 525,
  },
  {
    id: 4,
    chapter: "NEXT CHAPTER",
    color: "#FFD900",
    glow: "rgba(255,217,0,0.35)",
    border: "rgba(255,217,0,0.4)",
    title: "Into the Komputek Verse!",
    badge: "DAY 3–5",
    badgeColor: "#FFD900",
    date: "Jumat – Minggu, 11–13 September 2026",
    time: "Jumat 13.00 WIB – Selesai",
    place: "Yon Zipur 4",
    description:
      "Puncak kegiatan Interface 2026! Malam keakraban, berbagai lomba seru, dan banyak kejutan menanti. Jadilah bagian dari momen epik ini!",
    quests: [
      { label: "Ikuti City Tour & misi lapangan", points: 250 },
      { label: "Selesaikan tantangan kelompok", points: 200 },
      { label: "Ikuti Malam Keakraban", points: 150 },
      { label: "Menangkan lomba / kompetisi", points: 300 },
      { label: "Upload highlight ke sosmed", points: 100 },
    ],
    totalXP: 1000,
  },
];

function QuestCard({ quest, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="quest-card"
      style={{
        "--card-color": quest.color,
        "--card-glow": quest.glow,
        "--card-border": quest.border,
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Header */}
      <div className="quest-card__header">
        <div className="quest-card__chapter-row">
          <span
            className="quest-card__badge"
            style={{ background: quest.badgeColor, color: quest.badgeColor === "#FFD900" ? "#1a0a2e" : "#fff" }}
          >
            {quest.badge}
          </span>
          <span className="quest-card__chapter">{quest.chapter}</span>
        </div>

        <h3 className="quest-card__title">{quest.title}</h3>

        <p className="quest-card__meta">
          <span>📅 {quest.date}</span>
          <span>⏰ {quest.time}</span>
          <span>📍 {quest.place}</span>
        </p>
      </div>

      {/* Description */}
      <p className="quest-card__desc">{quest.description}</p>

      {/* Toggle */}
      <button
        className="quest-card__toggle"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        style={{ color: quest.color }}
      >
        {expanded ? "▲ Sembunyikan Quest" : "▼ Lihat Daftar Quest"}
      </button>

      {/* Quest List */}
      {expanded && (
        <ul className="quest-card__list">
          {quest.quests.map((q, i) => (
            <li key={i} className="quest-card__list-item">
              <span className="quest-card__list-icon" style={{ color: quest.color }}>✦</span>
              <span className="quest-card__list-label">{q.label}</span>
              <span className="quest-card__list-xp" style={{ color: quest.color }}>+{q.points} XP</span>
            </li>
          ))}
        </ul>
      )}

      {/* Footer */}
      <div className="quest-card__footer">
        <div className="quest-card__xp-bar">
          <div
            className="quest-card__xp-fill"
            style={{ background: `linear-gradient(90deg, ${quest.color}, ${quest.color}88)` }}
          />
        </div>
        <span className="quest-card__total-xp" style={{ color: quest.color }}>
          Total: {quest.totalXP.toLocaleString()} XP
        </span>
      </div>
    </article>
  );
}

export default function QuestCollect() {
  return (
    <main
      className="quest-page"
      style={{ paddingTop: "76px" }}
    >
      <style>{`
        /* ========== QUEST COLLECT PAGE ========== */
        .quest-page {
          width: 100%;
          min-height: 100vh;
          position: relative;
          padding-bottom: 80px;
        }

        /* HERO */
        .quest-hero {
          width: 100%;
          padding: 60px 24px 40px;
          text-align: center;
          position: relative;
        }

        .quest-hero__eyebrow {
          display: inline-block;
          font-family: 'Tektur', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #FFD900;
          background: rgba(255,217,0,0.12);
          border: 1px solid rgba(255,217,0,0.3);
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 20px;
        }

        .quest-hero__title {
          font-family: 'Tektur', sans-serif;
          font-size: clamp(32px, 6vw, 64px);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 16px;
          text-shadow: 0 0 40px rgba(255,89,251,0.4);
        }

        .quest-hero__title span {
          color: #FF59FB;
        }

        .quest-hero__subtitle {
          font-family: 'Sora', sans-serif;
          font-size: clamp(13px, 2vw, 16px);
          color: rgba(255,255,255,0.65);
          max-width: 520px;
          margin: 0 auto 32px;
          line-height: 1.6;
        }

        .quest-hero__stats {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .quest-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .quest-stat__value {
          font-family: 'Tektur', sans-serif;
          font-size: 28px;
          font-weight: 900;
          color: #FFD900;
          line-height: 1;
        }

        .quest-stat__label {
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* GRID */
        .quest-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* CARD */
        .quest-card {
          position: relative;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid var(--card-border);
          border-radius: 20px;
          padding: 24px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: questCardIn 0.5s ease both;
        }

        @keyframes questCardIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quest-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top left, var(--card-glow), transparent 65%);
          pointer-events: none;
          border-radius: inherit;
        }

        .quest-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px var(--card-glow);
        }

        .quest-card__header {
          margin-bottom: 12px;
        }

        .quest-card__chapter-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .quest-card__badge {
          font-family: 'Tektur', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          padding: 3px 10px;
          border-radius: 100px;
        }

        .quest-card__chapter {
          font-family: 'Tektur', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          letter-spacing: 2px;
        }

        .quest-card__title {
          font-family: 'Tektur', sans-serif;
          font-size: clamp(18px, 3vw, 24px);
          font-weight: 900;
          color: #fff;
          margin: 0 0 12px;
        }

        .quest-card__meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }

        .quest-card__desc {
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .quest-card__toggle {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Tektur', sans-serif;
          font-size: 12px;
          font-weight: 700;
          padding: 0;
          margin-bottom: 14px;
          transition: opacity 0.2s;
        }

        .quest-card__toggle:hover { opacity: 0.75; }

        .quest-card__list {
          list-style: none;
          margin: 0 0 16px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .quest-card__list-item {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          padding: 8px 12px;
        }

        .quest-card__list-icon {
          font-size: 10px;
          flex-shrink: 0;
        }

        .quest-card__list-label {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.85);
          flex: 1;
        }

        .quest-card__list-xp {
          font-family: 'Tektur', sans-serif;
          font-size: 11px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .quest-card__footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .quest-card__xp-bar {
          flex: 1;
          height: 5px;
          background: rgba(255,255,255,0.1);
          border-radius: 100px;
          overflow: hidden;
        }

        .quest-card__xp-fill {
          height: 100%;
          width: 100%;
          border-radius: 100px;
        }

        .quest-card__total-xp {
          font-family: 'Tektur', sans-serif;
          font-size: 13px;
          font-weight: 800;
          white-space: nowrap;
        }

        /* DIVIDER LABEL */
        .quest-section-label {
          text-align: center;
          margin: 48px auto 24px;
          font-family: 'Tektur', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 1100px;
          padding: 0 24px;
        }

        .quest-section-label::before,
        .quest-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.1);
        }

        @media (max-width: 640px) {
          .quest-grid {
            grid-template-columns: 1fr;
          }

          .quest-hero {
            padding: 40px 20px 28px;
          }

          .quest-hero__stats {
            gap: 20px;
          }
        }
      `}</style>

      {/* HERO */}
      <header className="quest-hero">
        <span className="quest-hero__eyebrow">🎯 Interface 2026</span>
        <h1 className="quest-hero__title">
          QUEST <span>COLLECT</span>
        </h1>
        <p className="quest-hero__subtitle">
          Kumpulkan XP dari setiap chapter kegiatan Interface 2026.
          Semakin aktif, semakin banyak poin yang kamu dapatkan!
        </p>
        <div className="quest-hero__stats">
          <div className="quest-stat">
            <span className="quest-stat__value">4</span>
            <span className="quest-stat__label">Chapter</span>
          </div>
          <div className="quest-stat">
            <span className="quest-stat__value">2.175</span>
            <span className="quest-stat__label">Total XP</span>
          </div>
          <div className="quest-stat">
            <span className="quest-stat__value">16</span>
            <span className="quest-stat__label">Quest</span>
          </div>
        </div>
      </header>

      {/* SECTION DIVIDER */}
      <div className="quest-section-label">Semua Chapter</div>

      {/* QUEST CARDS */}
      <div className="quest-grid">
        {QUESTS.map((quest, index) => (
          <QuestCard key={quest.id} quest={quest} index={index} />
        ))}
      </div>
    </main>
  );
}
