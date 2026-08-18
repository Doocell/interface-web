import { useState } from "react";

const GAMES = [
  {
    id: 1,
    emoji: "🧊",
    nama: "Ice Breaking",
    chapter: "CHAPTER 1",
    badge: "DAY 1",
    badgeColor: "#FF59FB",
    color: "#FF59FB",
    glow: "rgba(255,89,251,0.3)",
    durasi: "±2 Jam",
    peserta: "Seluruh Peserta",
    deskripsi:
      "Sesi pembuka yang seru untuk memecahkan kecanggungan antar peserta baru. Melalui mini-game ringan dan icebreaker interaktif, kamu akan langsung merasa akrab dengan kelompokmu.",
    aturan: [
      "Semua peserta wajib berpartisipasi aktif dalam setiap game",
      "Tidak ada yang boleh menolak tantangan dari panitia",
      "Bersikap sportif dan menghargai sesama peserta",
      "HP disimpan selama sesi berlangsung",
    ],
    kegiatan: [
      "Perkenalan kreatif antar anggota kelompok",
      "Two truths and a lie (game tebak fakta)",
      "Mini-challenge antar kelompok",
      "Yel-yel kelompok pertama",
    ],
  },
  {
    id: 2,
    emoji: "🏛️",
    nama: "City Tour",
    chapter: "CHAPTER 1",
    badge: "DAY 1",
    badgeColor: "#9513FF",
    color: "#9513FF",
    glow: "rgba(149,19,255,0.3)",
    durasi: "±3 Jam",
    peserta: "Seluruh Kelompok",
    deskripsi:
      "Jelajahi berbagai titik penting di lingkungan kampus sambil menyelesaikan misi seru. Setiap pos memiliki tantangan unik yang harus diselesaikan bersama kelompok.",
    aturan: [
      "Kelompok wajib check-in di setiap pos dengan bukti foto",
      "Tidak boleh meninggalkan anggota kelompok",
      "Misi harus diselesaikan sebelum batas waktu",
      "Dilarang curang atau melewati pos",
    ],
    kegiatan: [
      "Eksplorasi Gedung D4 FMIPA",
      "Check-in di 5 pos strategis",
      "Tantangan trivia di setiap pos",
      "Foto kreatif di spot ikonik kampus",
    ],
  },
  {
    id: 3,
    emoji: "⚔️",
    nama: "PKMMPD",
    chapter: "CHAPTER 2",
    badge: "DAY 2",
    badgeColor: "#189CF4",
    color: "#189CF4",
    glow: "rgba(24,156,244,0.3)",
    durasi: "±5 Jam",
    peserta: "Seluruh Peserta",
    deskripsi:
      "Pengenalan Kehidupan Mahasiswa Matematika dan Data — rangkaian kegiatan akademik dan sosial untuk mempersiapkan kamu menjadi mahasiswa yang siap tempur di dunia perkuliahan.",
    aturan: [
      "Wajib hadir di semua sesi PKMMPD tanpa terkecuali",
      "Aktif bertanya dan berpendapat saat sesi diskusi",
      "Tidak boleh menggunakan HP saat sesi berlangsung",
      "Harus menggunakan jas almamater",
    ],
    kegiatan: [
      "Pengenalan program studi Matematika & Data",
      "Sesi tanya jawab dengan kakak tingkat",
      "Workshop: Cara bertahan di dunia perkuliahan",
      "Diskusi kelompok & presentasi",
    ],
  },
  {
    id: 4,
    emoji: "🌙",
    nama: "Malam Keakraban",
    chapter: "NEXT CHAPTER",
    badge: "DAY 3–5",
    badgeColor: "#FFD900",
    color: "#FFD900",
    glow: "rgba(255,217,0,0.3)",
    durasi: "±6 Jam",
    peserta: "Seluruh Peserta",
    deskripsi:
      "Puncak dari seluruh rangkaian Interface 2026! Malam bertema Komputek Verse ini dipenuhi dengan pertunjukan seni, kompetisi seru, api unggun, dan momen keakraban yang tak terlupakan.",
    aturan: [
      "Wajib mengikuti arahan zona hijau/merah dari panitia",
      "Tidak boleh meninggalkan area tanpa izin",
      "Pakai atribut kelompok yang sudah disiapkan",
      "Jagalah kebersihan dan keamanan area Yon Zipur 4",
    ],
    kegiatan: [
      "Opening ceremony & penampilan seni",
      "Kompetisi antar kelompok (games & talent)",
      "Api unggun dan sharing session",
      "Pengumuman pemenang & penutupan",
    ],
  },
];

function GameCard({ game, index }) {
  const [activeTab, setActiveTab] = useState("aturan");

  return (
    <article
      className="game-card"
      style={{
        "--color": game.color,
        "--glow": game.glow,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Top accent line */}
      <div className="game-card__top-line" style={{ background: game.color }} />

      {/* Header */}
      <div className="game-card__header">
        <div className="game-card__emoji">{game.emoji}</div>
        <div className="game-card__header-text">
          <div className="game-card__meta-row">
            <span
              className="game-card__badge"
              style={{
                background: game.badgeColor,
                color: game.badgeColor === "#FFD900" ? "#1a0a2e" : "#fff",
              }}
            >
              {game.badge}
            </span>
            <span className="game-card__chapter">{game.chapter}</span>
          </div>
          <h3 className="game-card__name">{game.nama}</h3>
          <div className="game-card__pills">
            <span className="game-card__pill">⏱ {game.durasi}</span>
            <span className="game-card__pill">👥 {game.peserta}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="game-card__desc">{game.deskripsi}</p>

      {/* Tabs */}
      <div className="game-card__tabs">
        <button
          className={`game-card__tab ${activeTab === "aturan" ? "is-active" : ""}`}
          onClick={() => setActiveTab("aturan")}
          style={activeTab === "aturan" ? { color: game.color, borderBottomColor: game.color } : {}}
        >
          📋 Aturan
        </button>
        <button
          className={`game-card__tab ${activeTab === "kegiatan" ? "is-active" : ""}`}
          onClick={() => setActiveTab("kegiatan")}
          style={activeTab === "kegiatan" ? { color: game.color, borderBottomColor: game.color } : {}}
        >
          🗒 Kegiatan
        </button>
      </div>

      {/* Tab Content */}
      <ul className="game-card__list">
        {(activeTab === "aturan" ? game.aturan : game.kegiatan).map((item, i) => (
          <li key={i} className="game-card__list-item">
            <span className="game-card__list-dot" style={{ background: game.color }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function GameDescription() {
  return (
    <main
      className="gamedesc-page"
      style={{ paddingTop: "76px" }}
    >
      <style>{`
        /* ========== GAME DESCRIPTION PAGE ========== */
        .gamedesc-page {
          width: 100%;
          min-height: 100vh;
          padding-bottom: 80px;
        }

        /* HERO */
        .gamedesc-hero {
          text-align: center;
          padding: 60px 24px 40px;
        }

        .gamedesc-hero__eyebrow {
          display: inline-block;
          font-family: 'Tektur', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #189CF4;
          background: rgba(24,156,244,0.12);
          border: 1px solid rgba(24,156,244,0.3);
          border-radius: 100px;
          padding: 6px 16px;
          margin-bottom: 20px;
        }

        .gamedesc-hero__title {
          font-family: 'Tektur', sans-serif;
          font-size: clamp(28px, 5.5vw, 60px);
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 16px;
          text-shadow: 0 0 40px rgba(24,156,244,0.4);
        }

        .gamedesc-hero__title span {
          color: #189CF4;
        }

        .gamedesc-hero__subtitle {
          font-family: 'Sora', sans-serif;
          font-size: clamp(13px, 1.8vw, 16px);
          color: rgba(255,255,255,0.6);
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* GRID */
        .gamedesc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* CARD */
        .game-card {
          position: relative;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          overflow: hidden;
          padding: 0 0 24px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: gameCardIn 0.5s ease both;
        }

        @keyframes gameCardIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .game-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 50px var(--glow);
          border-color: rgba(255,255,255,0.2);
        }

        .game-card__top-line {
          height: 4px;
          width: 100%;
        }

        .game-card__header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 20px 0;
        }

        .game-card__emoji {
          font-size: 36px;
          line-height: 1;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          border-radius: 14px;
        }

        .game-card__header-text {
          flex: 1;
          min-width: 0;
        }

        .game-card__meta-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .game-card__badge {
          font-family: 'Tektur', sans-serif;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 3px 9px;
          border-radius: 100px;
        }

        .game-card__chapter {
          font-family: 'Tektur', sans-serif;
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 2px;
          font-weight: 700;
        }

        .game-card__name {
          font-family: 'Tektur', sans-serif;
          font-size: clamp(16px, 2.5vw, 20px);
          font-weight: 900;
          color: #fff;
          margin: 0 0 8px;
        }

        .game-card__pills {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .game-card__pill {
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.06);
          border-radius: 100px;
          padding: 3px 10px;
        }

        .game-card__desc {
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          line-height: 1.65;
          margin: 16px 20px 0;
        }

        /* TABS */
        .game-card__tabs {
          display: flex;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin: 16px 20px 0;
        }

        .game-card__tab {
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 8px 12px;
          font-family: 'Tektur', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          margin-bottom: -1px;
        }

        .game-card__tab:hover { color: rgba(255,255,255,0.75); }
        .game-card__tab.is-active { color: var(--color); border-bottom-color: var(--color); }

        /* LIST */
        .game-card__list {
          list-style: none;
          margin: 12px 20px 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .game-card__list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: 'Sora', sans-serif;
          font-size: 12.5px;
          color: rgba(255,255,255,0.75);
          line-height: 1.5;
        }

        .game-card__list-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 5px;
        }

        @media (max-width: 640px) {
          .gamedesc-grid { grid-template-columns: 1fr; }
          .gamedesc-hero { padding: 40px 20px 28px; }
        }
      `}</style>

      {/* HERO */}
      <header className="gamedesc-hero">
        <span className="gamedesc-hero__eyebrow">🎮 Interface 2026</span>
        <h1 className="gamedesc-hero__title">
          GAME <span>DESCRIPTION</span>
        </h1>
        <p className="gamedesc-hero__subtitle">
          Kenali setiap kegiatan Interface 2026 — aturan, misi, dan apa yang menanti kamu di setiap chapter!
        </p>
      </header>

      {/* CARDS */}
      <div className="gamedesc-grid">
        {GAMES.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </main>
  );
}