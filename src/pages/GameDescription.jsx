// src/pages/GameDescription.jsx - FIGMA: 921:1259 - 100% EXACT MATCH + FULLY RESPONSIVE
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import BackgroundPattern from "../components/layout/BackgroundPattern";

export default function GameDescription() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <BackgroundPattern />

      <style>{`
        /* ============================================
           GAME DESCRIPTION - FULLY RESPONSIVE
           ============================================ */

        .game-description-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          padding-top: 150px;
          padding-bottom: 100px;
          overflow-x: hidden;
        }

        /* ============================================
           TITLE - Responsive dengan clamp
           ============================================ */
        .game-desc-title {
          text-align: center;
          margin: 0 auto 80px;
          padding: 0 20px;
        }

        .game-desc-title h1 {
          font-family: "Tektur", sans-serif;
          font-weight: 800;
          font-size: clamp(60px, 8vw, 100px);
          line-height: 0.85;
          text-transform: uppercase;
          margin: 0;
          text-shadow: 8px 7px 0px #ac4afd, 0px 0px 10px white;
        }

        .game-desc-title .yellow {
          color: #FFD900;
        }

        .game-desc-title .white {
          color: #FFFFFF;
        }

        /* ============================================
           BACK BUTTON - Fixed positioning responsive
           ============================================ */
        .game-desc-back {
          position: fixed;
          left: 50px;
          top: 130px;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 217, 0, 0.95);
          border: none;
          padding: 12px 24px;
          border-radius: 12px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          transition: transform 0.2s;
        }

        .game-desc-back:hover {
          transform: translateX(-4px);
        }

        .game-desc-back svg {
          width: 24px;
          height: 24px;
          fill: #000;
        }

        .game-desc-back span {
          font-family: "Londrina Solid", sans-serif;
          font-size: 22px;
          font-weight: 400;
          color: #000;
        }

        /* ============================================
           SECTIONS CONTAINER
           ============================================ */
        .game-desc-sections {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .game-desc-section {
          position: relative;
          margin-top: 58px;
          margin-bottom: 100px;
          display: flex;
          flex-direction: column;
        }

        /* Left aligned sections (1, 3) */
        .game-desc-section.left { align-items: stretch; }

        /* Right aligned sections (2, 4) */
        .game-desc-section.right { align-items: stretch; }

        /* ============================================
           BADGE - Absolute overlap (InterfaceInfo style)
           ============================================ */
        .game-desc-badge {
          position: absolute;
          top: -42px;
          left: 18px;
          min-width: 360px;
          height: 86px;
          margin: 0;
          padding: 17px 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 5px solid;
          border-radius: 8px;
          z-index: 10;
          box-shadow: 0 0 24px currentColor, 5px 5px 5px rgba(0,0,0,0.25);
          transform: rotate(-2.6deg) skewX(-3deg);
          white-space: nowrap;
        }

        .game-desc-section.right .game-desc-badge {
          left: auto;
          right: 18px;
          transform: rotate(2.1deg) skewX(3deg);
        }

        .game-desc-badge-text {
          font-family: "Londrina Solid", sans-serif;
          font-weight: 900;
          font-size: clamp(1.8rem, 2.6vw, 2.4rem);
          text-transform: uppercase;
          letter-spacing: 0.02em;
          text-shadow: 5px 5px 8px rgba(0,0,0,0.3);
          margin: 0;
          line-height: 1;
        }

        /* ============================================
           CONTENT BOX - InterfaceInfo style
           ============================================ */
        .game-desc-content {
          position: relative;
          width: 100%;
          max-width: 1350px;
          min-height: 407px;
          background: rgba(41, 54, 62, 0.68);
          border: 7px solid;
          border-radius: 25px;
          /* top padding besar karena badge overlap dari atas */
          padding: 70px 66px 44px;
          box-sizing: border-box;
        }

        /* ============================================
           GLOW EFFECTS - 0 0 45px per InterfaceInfo
           ============================================ */
        .game-desc-section.color-review .game-desc-content {
          box-shadow: 0 0 45px #DFB009, inset 0 0 0 1px rgba(255,255,255,0.08);
        }
        .game-desc-section.color-analyze .game-desc-content {
          box-shadow: 0 0 45px #189CF4, inset 0 0 0 1px rgba(255,255,255,0.08);
        }
        .game-desc-section.color-improve .game-desc-content {
          box-shadow: 0 0 45px #9513FF, inset 0 0 0 1px rgba(255,255,255,0.08);
        }
        .game-desc-section.color-deploy .game-desc-content {
          box-shadow: 0 0 45px #FF59FB, inset 0 0 0 1px rgba(255,255,255,0.08);
        }

        .game-desc-section.left .game-desc-content {
          text-align: left;
        }
        .game-desc-section.right .game-desc-content {
          text-align: right;
        }

        /* ============================================
           TEXT CONTENT
           ============================================ */
        .game-desc-text {
          font-family: "Londrina Solid", sans-serif;
          font-weight: 300;
          font-size: 30px;
          line-height: 1.5;
          color: #FFFFFF;
          margin: 0;
          white-space: pre-line;
        }

        .game-desc-text a {
          color: #FFD900;
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.2s;
          font-weight: 300;
        }

        .game-desc-text a:hover {
          color: #FF59FB;
        }

        .game-desc-text .warning {
          font-weight: 400;
          display: block;
          margin-top: 20px;
          margin-bottom: 5px;
        }

        /* ============================================
           COLORS - Border, Badge bg & text per POS
           ============================================ */
        .color-review .game-desc-badge,
        .color-review .game-desc-content {
          border-color: #DFB009;
        }
        .color-review .game-desc-badge {
          background: #fff7c7;
          box-shadow: 0 0 24px #DFB009, 5px 5px 5px rgba(0,0,0,0.25);
        }
        .color-review .game-desc-badge-text { color: #DFB009; }

        .color-analyze .game-desc-badge,
        .color-analyze .game-desc-content {
          border-color: #189CF4;
        }
        .color-analyze .game-desc-badge {
          background: #cceeff;
          box-shadow: 0 0 24px #189CF4, 5px 5px 5px rgba(0,0,0,0.25);
        }
        .color-analyze .game-desc-badge-text { color: #189CF4; }

        .color-improve .game-desc-badge,
        .color-improve .game-desc-content {
          border-color: #9513FF;
        }
        .color-improve .game-desc-badge {
          background: #e6c4ff;
          box-shadow: 0 0 24px #9513FF, 5px 5px 5px rgba(0,0,0,0.25);
        }
        .color-improve .game-desc-badge-text { color: #9513FF; }

        .color-deploy .game-desc-badge,
        .color-deploy .game-desc-content {
          border-color: #FF59FB;
        }
        .color-deploy .game-desc-badge {
          background: #ffd2fd;
          box-shadow: 0 0 24px #FF59FB, 5px 5px 5px rgba(0,0,0,0.25);
        }
        .color-deploy .game-desc-badge-text { color: #FF59FB; }

        /* ============================================
           RESPONSIVE BREAKPOINTS
           ============================================ */

        /* Extra Large Desktop (1400px - 1600px+) */
        @media (min-width: 1600px) {
          .game-desc-sections {
            max-width: 1500px;
          }
        }

        /* Large Desktop (1200px - 1400px) */
        @media (max-width: 1400px) {
          .game-desc-sections {
            max-width: 1200px;
          }

          .game-desc-content {
            max-width: 1200px;
          }

          .game-desc-badge-text {
            font-size: 40px;
          }

          .game-desc-text {
            font-size: 28px;
          }

          .game-desc-content {
            padding: 45px 55px;
          }
        }

        /* Desktop (1024px - 1200px) */
        @media (max-width: 1200px) {
          .game-desc-sections {
            max-width: 1000px;
          }

          .game-desc-content {
            max-width: 1000px;
          }

          .game-desc-badge-text {
            font-size: 36px;
          }

          .game-desc-text {
            font-size: 26px;
          }

          .game-desc-content {
            padding: 40px 50px;
          }

          .game-desc-badge {
            padding: 12px 45px;
          }
        }

        /* Tablet Landscape (900px - 1024px) */
        @media (max-width: 1024px) {
          .game-desc-sections {
            max-width: 900px;
          }

          .game-desc-content {
            max-width: 900px;
          }

          .game-desc-badge {
            padding: 12px 42px;
          }

          .game-desc-badge-text {
            font-size: 34px;
          }

          .game-desc-text {
            font-size: 24px;
          }

          .game-desc-content {
            padding: 38px 45px;
            border-radius: 26px;
          }

          .game-desc-section {
            margin-bottom: 90px;
          }

          /* Maintain glow but reduce intensity */
          .game-desc-section.color-review .game-desc-content {
            box-shadow: 0 0 35px rgba(223, 176, 9, 0.35), 0 10px 40px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-analyze .game-desc-content {
            box-shadow: 0 0 35px rgba(24, 156, 244, 0.35), 0 10px 40px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-improve .game-desc-content {
            box-shadow: 0 0 35px rgba(149, 19, 255, 0.35), 0 10px 40px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-deploy .game-desc-content {
            box-shadow: 0 0 35px rgba(255, 89, 251, 0.35), 0 10px 40px rgba(0,0,0,0.6);
          }
        }

        /* Tablet Portrait (768px - 900px) */
        @media (max-width: 900px) {
          .game-desc-back {
            left: 25px;
            top: 110px;
          }

          .game-desc-sections {
            max-width: 750px;
          }

          .game-desc-section {
            margin-bottom: 80px;
          }

          .game-desc-badge {
            padding: 11px 38px;
          }

          .game-desc-badge-text {
            font-size: 32px;
            letter-spacing: 1.2px;
          }

          .game-desc-text {
            font-size: 22px;
          }

          .game-desc-content {
            padding: 36px 42px;
          }
        }

        /* Tablet (768px and below) */
        @media (max-width: 768px) {
          .game-description-container {
            padding-top: 120px;
            padding-bottom: 60px;
          }

          .game-desc-title {
            margin-bottom: 50px;
          }

          .game-desc-title h1 {
            font-size: clamp(45px, 12vw, 65px);
            line-height: 0.9;
          }

          .game-desc-back {
            left: 20px;
            top: 100px;
            padding: 10px 20px;
          }

          .game-desc-back svg {
            width: 20px;
            height: 20px;
          }

          .game-desc-back span {
            font-size: 18px;
          }

          .game-desc-sections {
            max-width: 700px;
          }

          .game-desc-section {
            margin-bottom: 70px;
          }

          .game-desc-badge {
            padding: 10px 40px;
            margin-bottom: -20px;
            border-width: 4px;
          }

          /* Simplify alignment untuk tablet */
          .game-desc-section.left .game-desc-badge,
          .game-desc-section.right .game-desc-badge {
            margin-left: 30px;
            margin-right: 0;
            transform: rotate(-2deg);
          }

          .game-desc-badge-text {
            font-size: 30px;
            letter-spacing: 1px;
          }

          .game-desc-content {
            max-width: 100%;
            padding: 35px 40px;
            border-radius: 22px;
            border-width: 4px;
            text-align: left !important;
          }

          .game-desc-text {
            font-size: 20px;
            line-height: 1.55;
          }

          /* Reduce glow for tablet */
          .game-desc-section.color-review .game-desc-content {
            box-shadow: 0 0 30px rgba(223, 176, 9, 0.3), 0 8px 32px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-analyze .game-desc-content {
            box-shadow: 0 0 30px rgba(24, 156, 244, 0.3), 0 8px 32px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-improve .game-desc-content {
            box-shadow: 0 0 30px rgba(149, 19, 255, 0.3), 0 8px 32px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-deploy .game-desc-content {
            box-shadow: 0 0 30px rgba(255, 89, 251, 0.3), 0 8px 32px rgba(0,0,0,0.6);
          }
        }

        /* Mobile Landscape (640px - 768px) */
        @media (max-width: 640px) {
          .game-desc-sections {
            max-width: 100%;
            padding: 0 15px;
          }

          .game-desc-section {
            margin-top: 75px;
            margin-bottom: 60px;
          }

          .game-desc-badge {
            position: absolute;
            top: -48px;
            left: 50%;
            transform: translateX(-50%) rotate(0deg) !important;
            padding: 10px 36px;
            margin: 0 !important;
            min-width: 300px;
          }

          .game-desc-badge-text {
            font-size: 26px;
          }

          .game-desc-content {
            padding: 36px 28px;
            border-width: 4px;
            border-radius: 20px;
            min-height: auto;
          }

          .game-desc-text {
            font-size: 18px;
          }

          /* Subtle glow for mobile landscape */
          .game-desc-section.color-review .game-desc-content {
            box-shadow: 0 0 25px rgba(223, 176, 9, 0.25), 0 6px 24px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-analyze .game-desc-content {
            box-shadow: 0 0 25px rgba(24, 156, 244, 0.25), 0 6px 24px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-improve .game-desc-content {
            box-shadow: 0 0 25px rgba(149, 19, 255, 0.25), 0 6px 24px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-deploy .game-desc-content {
            box-shadow: 0 0 25px rgba(255, 89, 251, 0.25), 0 6px 24px rgba(0,0,0,0.6);
          }
        }

        /* Mobile Portrait (480px - 640px) */
        @media (max-width: 480px) {
          .game-description-container {
            padding-top: 110px;
            padding-bottom: 50px;
          }

          .game-desc-title {
            margin-bottom: 40px;
          }

          .game-desc-title h1 {
            font-size: clamp(38px, 13vw, 50px);
            line-height: 1;
          }

          .game-desc-back {
            left: 10px;
            top: 90px;
            padding: 8px 16px;
          }

          .game-desc-back svg {
            width: 18px;
            height: 18px;
          }

          .game-desc-back span {
            font-size: 16px;
          }

          .game-desc-sections {
            padding: 0 12px;
          }

          .game-desc-section {
            margin-top: 80px;
            margin-bottom: 50px;
            align-items: flex-start !important;
          }

          .game-desc-badge {
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%) rotate(0deg) !important;
            padding: 10px 32px;
            margin: 0 !important;
            border-width: 3px;
            border-radius: 50px;
            min-width: 280px;
            height: auto;
          }

          .game-desc-badge-text {
            font-size: 24px;
            letter-spacing: 0.8px;
          }

          .game-desc-content {
            padding: 35px 24px 28px;
            border-width: 3px;
            border-radius: 18px;
            min-height: auto;
          }

          .game-desc-text {
            font-size: 16px;
            line-height: 1.65;
          }

          /* Minimal glow for mobile */
          .game-desc-section.color-review .game-desc-content {
            box-shadow: 0 0 20px rgba(223, 176, 9, 0.2), 0 5px 20px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-analyze .game-desc-content {
            box-shadow: 0 0 20px rgba(24, 156, 244, 0.2), 0 5px 20px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-improve .game-desc-content {
            box-shadow: 0 0 20px rgba(149, 19, 255, 0.2), 0 5px 20px rgba(0,0,0,0.6);
          }

          .game-desc-section.color-deploy .game-desc-content {
            box-shadow: 0 0 20px rgba(255, 89, 251, 0.2), 0 5px 20px rgba(0,0,0,0.6);
          }
        }

        /* Extra Small Mobile (360px - 480px) */
        @media (max-width: 360px) {
          .game-desc-sections {
            padding: 0 10px;
          }

          .game-desc-section {
            margin-top: 75px;
            margin-bottom: 45px;
          }

          .game-desc-badge {
            top: -48px;
            padding: 9px 28px;
            min-width: 260px;
          }

          .game-desc-badge-text {
            font-size: 21px;
            letter-spacing: 0.6px;
          }

          .game-desc-content {
            padding: 32px 20px 26px;
          }

          .game-desc-text {
            font-size: 15px;
            line-height: 1.7;
          }

          .game-desc-title h1 {
            font-size: clamp(32px, 15vw, 42px);
          }
        }

        /* Ultra Small Mobile (<360px) */
        @media (max-width: 320px) {
          .game-desc-section {
            margin-top: 70px;
            margin-bottom: 40px;
          }

          .game-desc-badge {
            top: -46px;
            padding: 8px 24px;
            min-width: 240px;
          }

          .game-desc-badge-text {
            font-size: 19px;
            letter-spacing: 0.5px;
          }

          .game-desc-content {
            padding: 30px 18px 24px;
          }

          .game-desc-text {
            font-size: 14px;
            line-height: 1.75;
          }
        }
      `}</style>

      <main className="game-description-container">
        {/* Back Button */}
        {/* <button className="game-desc-back" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          <span>BACK</span>
        </button> */}

        {/* Title */}
        <header className="game-desc-title">
          <h1>
            <span className="yellow">G</span>
            <span className="white">AME</span>
            <br />
            <span className="yellow">D</span>
            <span className="white">ESCRIPTION</span>
          </h1>
        </header>

        {/* Sections */}
        <div className="game-desc-sections">
          {/* POS REVIEW - Left */}
          <article className="game-desc-section left color-review">
            <div className="game-desc-badge">
              <h2 className="game-desc-badge-text">POS REVIEW</h2>
            </div>
            <div className="game-desc-content">
              <p className="game-desc-text">
                Introduction of Computer Science atau yang lebih dikenal dengan INTERFACE, adalah program kerja tahunan Himpunan Mahasiswa Ilmu Komputer (HIMA ILKOM) Universitas Negeri Semarang yang menjadi gerbang awal bagi mahasiswa baru untuk mengenal dunia rumpun Ilmu Komputer secara menyeluruh.
                {'\n\n'}
                Program ini menjadi jembatan transisi dari dunia sekolah menuju dunia perkuliahan melalui serangkaian kegiatan yang terstruktur dan berkesinambungan. Selain aspek akademik dan lingkungan kampus, Interface juga mengenalkan budaya, nilai, dan dinamika kehidupan sebagai bagian dari keluarga besar Ilmu Komputer, menjadikannya fondasi awal sebelum mahasiswa baru melangkah lebih jauh dalam perjalanan akademik dan profesionalnya.
              </p>
            </div>
          </article>

          {/* POS ANALYZE - Right */}
          <article className="game-desc-section right color-analyze">
            <div className="game-desc-badge">
              <h2 className="game-desc-badge-text">POS ANALYZE</h2>
            </div>
            <div className="game-desc-content">
              <p className="game-desc-text">
                Pos kedua ini merupakan arena mengasah ingatan berdurasi 25 menit pelaksanaan dan 5 menit transisi yang mempertemukan 4 kelompok sekaligus dalam satu meja di masing-masing sub-pos paralel menggunakan permainan kartu DECK. Permainan ini berlangsung dalam dua ronde berdurasi maksimal 12 menit, dengan jeda 1 menit di antaranya untuk mengatur ulang line-up pemain, dan setiap kelompok wajib mengganti perwakilan di tiap giliran agar seluruh anggota mendapat kesempatan bermain. Misi utama tiap perwakilan adalah membuat total nilai empat kartu tertutup di deck kelompoknya sekecil mungkin, dengan mengambil kartu dari stock lalu menukar atau membuangnya, serta memanfaatkan skill khusus pada kartu 7 hingga K untuk mengintip atau menukar kartu milik sendiri maupun lawan. Melalui special rules "buang kartu kembar", kelompok mana pun boleh membuang kartu kapan saja jika yakin nilainya sama dengan kartu yang baru diletakkan, namun akan terkena hukuman tambahan kartu jika tebakannya salah. Ronde juga bisa diakhiri lebih awal lewat seruan "Bingo!" dari pemain yang sudah yakin dengan deck-nya. Setelah dua ronde selesai, panitia merekapitulasi nilai deck tiap kelompok menjadi poin turnamen, dan ditutup dengan evaluasi singkat serta persiapan transisi ke pos berikutnya. Aturan lengkap mengenai nilai kartu, skill, dan mekanisme detail lainnya dapat dibaca pada panduan permainan DECK melalui link berikut.
                {' '}
                <a href="https://docs.google.com/document/u/0/d/1Kg0YtSVHEvj9iocJjKFl0glBdcvVmf7Q1YmopgmxhMk/edit" target="_blank" rel="noopener noreferrer">
                  PANDUAN PERMAINAN DECK
                </a>
              </p>
            </div>
          </article>

          {/* POS IMPROVE - Left */}
          <article className="game-desc-section left color-improve">
            <div className="game-desc-badge">
              <h2 className="game-desc-badge-text">POS IMPROVE</h2>
            </div>
            <div className="game-desc-content">
              <p className="game-desc-text">
                Pos ketiga merupakan arena debat freestyle yang bertujuan mendorong player untuk berlatih mengemukakan gagasan dan berimprovisasi dalam penyampaiannya.
                {'\n\n'}
                Pada pos ini akan diberi waktu satu menit untuk panitia melakukan case reveal dan melakukan pembagian role di setiap kelompok.
                {'\n\n'}
                Selanjutnya para player akan diberikan waktu 5 menit untuk berdiskusi dengan anggota kelompoknya.
                {'\n\n'}
                Berikutnya setiap kelompok mengajukan satu perwakilan untuk menyampaikan pendapat hasil diskusi dengan kelompoknya. Setiap kelompok diberikan waktu 1 menit untuk menyampaikan hasil diskusinya. Kemudian setiap player dapat melakukan debat freestyle yang mana setiap kelompok dapat melakukan serangan dan pembelaan kepada semua kelompok walaupun kelompok tersebut ada pada role yang sama. Debat freestyle ini diberikan waktu selama 19 menit.
                {'\n\n'}
                Sesi terakhir setiap player akan diberikan waktu 2 menit untuk melakukan vote kepada setiap pendapat kecuali pendapat kelompoknya sendiri.
                {'\n'}
                <span className="warning">WARNING!!!!</span>
                Aturan tambahan untuk debat freestyle, dilarang keras menggunakan kata kata kasar saat proses debat.
              </p>
            </div>
          </article>

          {/* POS DEPLOY - Right */}
          <article className="game-desc-section right color-deploy">
            <div className="game-desc-badge">
              <h2 className="game-desc-badge-text">POS DEPLOY</h2>
            </div>
            <div className="game-desc-content">
              <p className="game-desc-text">
                Pos keempat merupakan babak puncak sekaligus muara dari seluruh petualangan kelompok yang dilaksanakan secara terpusat di Main Arena dengan durasi 35 menit pelaksanaan penuh. Pada pos terakhir ini akan mengumpulkan semua kelompok dari semua rombongan untuk berkompetisi di Pos Deploy in. Akan disediakan 3 continent yang memuat berbagai soal.
                {'\n\n'}
                Misi utama mereka di sini adalah menyelesaikan tantangan soal yang disediakan panitia di map continent-continent tersebut, yang terdiri dari variasi tingkat kesulitan mulai dari logika dasar, soal UTBK, hingga soal OSN Informatika dan algoritma koding dasar. Pengerjaan dilakukan secara kolaboratif, di mana perwakilan kelompok mengambil satu soal ke depan, menyelesaikannya bersama-sama, lalu membawanya kembali ke panitia untuk dikoreksi; jika benar, mereka baru diperbolehkan mengambil soal berikutnya.
                {'\n\n'}
                Setiap kelompok dapat mengerjakan maksimal 7 soal benar dari banyaknya soal yang disediakan dengan skor setiap soal adalah 20 poin soal (SS) wilayah yang sangat besar, 15 poin soal (S) wilayah besar, 10 poin untuk soal (M) wilayah sedang, 5 poin untuk soal (E) wilayah kecil. Setiap soal yang diselesaikan dengan benar akan mendapatkan satu teritori di dalam peta sesuai nomor soal. Teritori yang telah didapatkan akan ditandai dengan stiker dari masing masing kelompok. Satu soal bisa dikerjakan oleh banyak kelompok sekaligus. Namun, point dari territory tersebut hanya akan didapatkan oleh kelompok tercepat yang berhasil memecahkan persoalan. Jika Soal pada suatu nomor telah diselesaikan oleh salah satu kelompok maka soal tersebut akan hangus di kelompok lainya yang belum dapat menyelesaikannya.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
