import { useRef } from "react";

/* ─── DATA ────────────────────────────────────────────────────────────────── */
const PLAYER_TASKS = [
  {
    id: 1,
    penugasan: "Penugasan 1",
    logo: "/logo_tugas/Skill-Ketua 2.svg",
    title: "PRESS START BUTTON ",
    date: "Kamis, 27 Agustus 2026",
    description:
      "Dalam penugasan ini, player wajib menggunakan foto pribadi yang terlihat jelas dan tidak mengandung unsur SARA maupun pornografi. Foto tersebut diunggah pada feed Instagram dari akun utama yang tidak di-private, dengan menggunakan Twibbon yang telah disediakan. player juga dilarang menghapus atau mengarsipkan postingan tersebut hingga seluruh rangkaian acara INTERFACE berakhir. Postingan wajib menggunakan lagu “INTERFACE” yang tersedia pada Template Logbook 2026, serta mengikuti dan menandai akun Instagram @osjurilkom dan @himailkomunnes. Selain itu, player wajib menandai 5 akun teman Ilkom Unnes dan akun Pendamping masing-masing.Deadline maksimal Upload Kamis, 27 Agustus 2026 pukul 23.59 WIB.",
  },
  {
    id: 2,
    penugasan: "Penugasan 2",
    logo: "/logo_tugas/Skill-Ketua 2-1.svg",
    title: "WELCOME NEW PLAYER",
    date: "Minggu, 30 Agustus 2026",
    description:
      "Dalam penugasan ini, berupa video biodata, player diwajibkan membuat video yang memperkenalkan diri dengan mencantumkan nama lengkap, asal daerah, rombel, dan prodi. Video juga berisi hobi, perjalanan hingga masuk Ilkom UNNES, rencana dan harapan selama berada di Ilkom UNNES, minat dan bakat, serta game yang disukai beserta alasannya. Video wajib menggunakan frame yang telah disediakan dengan durasi 2–3 menit, kemudian diunggah ke akun Instagram utama (main account) yang tidak di-private. Postingan tidak boleh dihapus atau diarsipkan sampai seluruh rangkaian acara INTERFACE berakhir. player juga wajib mengikuti dan menandai akun Instagram @osjurilkom dan @himailkomunnes, serta menandai 3 akun teman Ilkom UNNES dan akun Pendamping masing-masing. Deadline maksimal upload Minggu, 30 Agustus 2026 pukul 23.59 WIB."
  },
  {
    id: 3,
    penugasan: "Penugasan 3",
    logo: "/logo_tugas/Skill-Ketua 2-2.svg",
    title: "CONNECTING TO SERVER",
    date: "Sabtu, 5 September 2026",
    description:
      "Tugas terbagi menjadi dua, yaitu Ilkom Player’s Session dan Player’s Knowledge Hunt. Ilkom Player’s Session dilakukan dengan membuat story Instagram bersama 20 teman Ilkom UNNES Angkatan 26 dari party berbeda menggunakan gelang dan template yang tersedia, kemudian dijadikan sorotan “Ilkom Players 26” serta dikumpulkan buktinya di Logbook. Sementara itu, Player’s Knowledge Hunt dilakukan dengan mewawancarai 5 Kating Ilkom Angkatan 25/24/23/22 menggunakan pertanyaan yang tersedia, lalu merangkum hasil wawancara dan melampirkan bukti foto di Logbook. Deadline maksimal upload Sabtu, 5 September 2026 pukul 23.59 WIB."
  },
  {
    id: 4,
    penugasan: "Penugasan 4",
    logo: "/logo_tugas/Skill-Ketua 2-3.svg",
    title: "QUEST ",
    date: "Minggu, 6 September 2026",
    description:
        "Dalam penugasan ini, player ditugaskan untuk melakukan chat dengan pendamping yang telah ditentukan dengan menerapkan etika komunikasi yang baik dan benar kepada dosen. Setelah mengikuti penyuluhan pada hari pertama, player memilih salah satu permasalahan yang diberikan, seperti menanyakan tugas, meminta izin tidak mengikuti perkuliahan, atau meminta tanda tangan, kemudian mengimplementasikannya melalui chat. Pendamping akan memberikan respon, dan jika chat belum sesuai, player wajib melakukan revisi dan mengulang chat dari awal. Deadline maksimal upload Minggu, 6 September 2026 pukul 23.59 WIB."
  },
  {
    id: 5,
    penugasan: "Penugasan 5",
    logo: "/logo_tugas/Skill-Ketua 2.svg",
    title: "EQUIPMENT SETUP",
    date: "Rabu, 2 September 2026",
    description:
      "Dalam penugasan ini, player diwajibkan menginstal VSCode beserta compiler (MSYS2 atau MinGW), kemudian membuat laporan praktikum yang berisi langkah-langkah proses instalasi dan dilengkapi foto pada setiap tahap. Laporan dikumpulkan dalam format PDF dan hanya memuat alur pembuatannya. Deadline maksimal upload Rabu, 2 September 2026 pukul 23.59 WIB."
  },
  {
    id: 6,
    penugasan: "Penugasan 6",
    logo: "/logo_tugas/Skill-Ketua 2-2.svg",
    title: "USE YOUR EQUIPMENT",
    date: "Kamis, 3 September 2026",
    description:
      "Dalam penugasan ini, player membuat program sederhana menggunakan C++ dengan studi kasus berdasarkan NIM, yaitu NIM genap menentukan apakah seseorang cukup umur untuk membuat SIM (≤17 tahun), sedangkan NIM ganjil menentukan tiket gratis atau berbayar (≤5 tahun gratis). player juga membuat video penjelasan dan mengunggahnya ke Google Drive bersama file program. Screenshot program dan hasil running serta link Google Drive dicantumkan pada Log Book, kemudian link Google Drive dikumpulkan melalui Google Classroom. Deadline maksimal upload Kamis, 3 September 2026 pukul 23.59 WIB."
  },
];

const PARTY_TASKS = [
  {
    id: 7,
    penugasan: "Penugasan 1",
    logo: "/logo_tugas/Skill-Ketua 2.svg",
    title: "EASTER EGG HUNT",
    date: "Sabtu, 29 Agustus 2026",
    description:
      "Dalam penugasan ini, Aliansi yang berisikan 2 party ditugaskan untuk mencari maskot/logo yang telah disediakan panitia pada kegiatan Next Chapter: Into The Komputek Verse! pada Jumat, 11 September 2026. Setelah menemukannya, player membuat laporan penemuan yang dilengkapi foto di lokasi ditemukannya logo, kemudian mengunggah laporan tersebut ke Google Classroom yang telah disediakan. Deadline maksimal Jumat, 11 September 2026 pukul 23.59 WIB."
  },
  {
    id: 8,
    penugasan: "Penugasan 2",
    logo: "/logo_tugas/Skill-Ketua 2-1.svg",
    title: "PARTY JOURNEY",
    date: "Minggu, 6 September 2026",
    description:
      "Dalam penugasan ini, Masing-masing player membuat carousel Instagram party yang berisi foto party Day 1 Interface, foto bersama logo interface saat Easter Egg Hunt, quotes party, foto individu anggota, serta foto kolaborasi dengan 5 party lain. Player juga dapat menambahkan konten lain sesuai kreativitas dan tidak ada batas jumlah slide. Carousel diunggah ke akun Instagram masing-masing, postingan diperbolehkan kolaborasi dengan instagram party,  tidak boleh dihapus atau diarsipkan sampai rangkaian Interface berakhir, serta wajib mention @osjurilkom, @himailkomunnes, dan akun pendamping masing-masing. Deadline maksimal Rabu, 18 September 2026 pukul 23.59 WIB."
  },
  {
    id: 9,
    penugasan: "Penugasan 3",
    logo: "/logo_tugas/Skill-Ketua 2-2.svg",
    title: "FINAL PLAYTHROUGH",
    date: "Sabtu, 5 September 2026",
    description:
      "Dalam penugasan ini, player mengikuti acara EXPO pada Next Chapter: Into The Komputek Verse! dan membuat vlog party berdurasi 3–5 menit yang diawali dengan perkenalan party dan seluruh player, serta menyertakan video Flashmob Interface. Kreativitas vlog dibebaskan kepada masing-masing party. Video diunggah ke akun TikTok setiap anggota party yang bersifat publik dan wajib menandai akun @himailkomunnes. Deadline maksimal Jumat, 18 September 2026 pukul 23.59 WIB."
  },
];
/* ─── QUEST CARD ──────────────────────────────────────────────────────────── */
function QuestCard({ task }) {
  return (
    <div className="qc-card">
      <div className="qc-card__top">
        <img
          className="qc-card__thumb"
          src={task.logo}
          alt={task.penugasan}
        />
        <div className="qc-card__header-info">
          <p className="qc-card__penugasan">{task.penugasan}</p>
          <h3 className="qc-card__title">{task.title}</h3>
          <div className="qc-card__date-badge">
            <svg className="qc-card__clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15.5 14" />
            </svg>
            <span>{task.date}</span>
          </div>
        </div>
      </div>
      <div className="qc-card__divider" />
      <p className="qc-card__desc">{task.description}</p>
    </div>
  );
}

/* ─── TASK SECTION ────────────────────────────────────────────────────────── */
function TaskSection({ title, tasks }) {
  const scrollRef = useRef(null);
  return (
    <section className="qc-section">
      <div className="qc-section__bg" />
      <h2 className="qc-section__title" style={{
          background: "linear-gradient(180deg, #EA56FB 0%, #AC4AFC 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>{title}</h2>
      <div className="qc-section__row" ref={scrollRef}>
        {tasks.map((task) => (
          <QuestCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

/* ─── PAGE ────────────────────────────────────────────────────────────────── */
export default function QuestCollect() {
  return (
    <main className="qc-page" style={{ paddingTop: "76px" }}>
      <style>{`
        .qc-page {
          width: 100%;
          min-height: 100vh;
          background-color: #685ABB;
          position: relative;
          overflow-x: hidden;
        }

        /* HERO */
        .qc-hero {
          text-align: center;
          padding: 60px 24px 32px;
        }
        .qc-hero__title {
          font-family: 'Tektur', sans-serif;
          font-weight: 800;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.85;
          text-transform: uppercase;
          text-align: center;
          margin: 0;
          text-shadow: 8px 7px 0px #ac4afd, 0px 0px 10px white;
        }
        .qc-hero__title .yellow { color: #FFD900; }
        .qc-hero__title .white  { color: #FFFFFF; }

        /* CONTENT WRAPPER */
        .qc-content {
          padding: 0 36px;
        }

        /* SECTION */
        .qc-section {
          position: relative;
          margin: 32px -36px 48px;
        }
        .qc-section__bg {
          position: absolute;
          inset: 0;
          background: rgba(32, 45, 51, 0.61);
          border: 3px solid #DFDFDF;
          border-radius: 15px;
          pointer-events: none;
        }
        .qc-section__title {
          font-family: 'Londrina Solid';
          font-weight: 900;
          font-size: clamp(40px, 5vw, 66.902px);
          font-style: normal;
          line-height: 74.2px;
          letter-spacing: 1.338px;
          text-transform: uppercase;
          text-align: center;
          text-shadow: 8.437px 8.437px 8.015px rgba(0, 0, 0, 0.25);
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: #FFF;
          margin: 0;
          padding: 32px 24px 12px;
          position: relative;
          z-index: 1;
        }
        .qc-section__row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 39px;
          overflow-x: auto;
          padding: 24px 36px 36px;
          position: relative;
          z-index: 1;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.2) transparent;
        }
        .qc-section__row::-webkit-scrollbar { height: 6px; }
        .qc-section__row::-webkit-scrollbar-track { background: transparent; }
        .qc-section__row::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 3px;
        }

        /* CARD */
        .qc-card {
          flex-shrink: 0;
          width: 508px;
          min-height: 621px;
          background: rgba(41, 54, 62, 0.6);
          border: 4px solid #FFFFFF;
          border-radius: 50px;
          padding: 41px 44px;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        .qc-card__top {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 11px;
        }
        .qc-card__thumb {
          flex-shrink: 0;
          width: 82px;
          height: 81px;
          object-fit: contain;
          border-radius: 12px;
        }
        .qc-card__header-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding-top: 4px;
        }
        .qc-card__penugasan {
          font-family: 'Tektur', sans-serif;
          font-weight: 500;
          font-size: 18px;
          line-height: 20.09px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
        }
        .qc-card__title {
          font-family: 'Tektur', sans-serif;
          font-weight: 900;
          font-size: 35px;
          line-height: 38.62px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #FFFFFF;
          margin: 0;
        }
        .qc-card__date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(0, 0, 0, 0.31);
          border-radius: 20px;
          padding: 3px 12px 3px 10px;
          margin-top: 6px;
          width: fit-content;
        }
        .qc-card__clock {
          width: 11px;
          height: 11px;
          color: #FFFFFF;
          flex-shrink: 0;
        }
        .qc-card__date-badge span {
          font-family: 'Londrina Solid', cursive;
          font-weight: 400;
          font-size: 12px;
          line-height: 13.54px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #FFFFFF;
          white-space: nowrap;
        }
        .qc-card__divider {
          width: 100%;
          height: 2px;
          background: #FFFFFF;
          margin: 20px 0;
          border-radius: 1px;
        }
        .qc-card__desc {
          font-family: 'Londrina Solid', cursive;
          font-weight: 300;
          font-size: 18px;
          line-height: 1.55;
          color: #FFFFFF;
          margin: 0;
          flex: 1;
        }

        /* BACK BUTTON */
        .qc-back-wrap {
          padding: 24px 0 0 48px;
        }
        .qc-back {
          display: inline-flex;
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          filter: drop-shadow(0px 4px 4px rgba(0,0,0,0.25));
          padding: 0;
        }
        .qc-back__arrow {
          width: 40px;
          height: 55px;
          background: #FFD900;
          clip-path: polygon(100% 0%, 100% 100%, 0% 50%);
        }
        .qc-back__label {
          background: #FFD900;
          border-radius: 0 4px 4px 0;
          padding: 7px 16px;
          font-family: 'Londrina Solid', cursive;
          font-weight: 400;
          font-size: 25px;
          color: #FFFFFF;
          line-height: 1.2;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .qc-card {
            width: 320px;
            min-height: unset;
            padding: 28px 24px;
            border-radius: 32px;
          }
          .qc-card__title { font-size: 22px; line-height: 1.2; }
          .qc-section__row { padding: 16px 20px 24px; gap: 20px; }
          .qc-content { padding: 0 16px; }
          .qc-section { margin: 24px -16px 32px; }
          .qc-section__title {
            -webkit-text-stroke-width: 2px;
            font-size: clamp(32px, 8vw, 66.902px);
          }
        }
      `}</style>

      {/* BACK BUTTON */}
      {/* <div className="qc-back-wrap">
        <button className="qc-back" onClick={() => window.history.back()} aria-label="Kembali ke halaman sebelumnya">
          <span className="qc-back__arrow" aria-hidden="true" />
          <span className="qc-back__label">BACK</span>
        </button>
      </div> */}

      {/* HERO TITLE */}
      <header className="qc-hero">
        <h1 className="qc-hero__title">
            <span className="yellow">Q</span><span className="white">UEST</span>
            <br />
            <span className="yellow">C</span><span className="white">OLLECT</span>
          </h1>
      </header>

      {/* SECTIONS */}
      <div className="qc-content">
        <TaskSection title="Player Tasks" tasks={PLAYER_TASKS} />
        <TaskSection title="Party Tasks" tasks={PARTY_TASKS} />
      </div>
    </main>
  );
}
