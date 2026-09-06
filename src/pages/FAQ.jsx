// src/pages/FAQ.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import circleAsset from "../assets/leaderboard/elemen-lingkaran.svg";
import triangleAsset from "../assets/leaderboard/elemen-segitiga.svg";
import crossAsset from "../assets/leaderboard/elemen-x.svg";
import BackgroundPattern from "../components/layout/BackgroundPattern";
import "../styles/FAQSection.css";

const iconAssets = {
  triangle: triangleAsset,
  cross: crossAsset,
  circle: circleAsset,
};

const defaultFaqItems = [
  {
    type: "triangle",
    question: "Apa reward dan benefit yang didapat player selama mengikuti INTERFACE 2026??",
    answer:
      "Menjadi bagian dari INTERFACE 2026 adalah main quest berharga yang cuma bisa kamu rasakan sekali seumur hidup! Selain mengukir memori seru, kamu bakal mendapatkan sertifikat PKMMPD untuk kebutuhan SKPI, memperluas networking dengan maba dan kating di dunia Ilkom yang berkembang cepat, hingga mengenal berbagai organisasi dan underbow positif. Plus, kamu jadi paham etika serta karakteristik berkomunikasi dengan dosen, sekaligus tahu ke mana harus mencari pertolongan kalau menghadapi kesulitan di kampus! "
  },
  {
    type: "square",
    question: "Kak, kalau aku berhalangan hadir saat Next Chapter, gimana alur perizinannya ya? ",
    answer:
      "Alur perizinan dimulai dari Player yang mengunduh template di https://bit.ly/SuratKeteranganIzinInterface2026 ,mengisinya plus melampirkan bukti, meminta tanda tangan basah Game Master (Ketua Pelaksana), lalu menyerahkannya ke Ketua Party yang nantinya bertugas merekap nama-nama tersebut ke template surat izin kolektif dari https://bit.ly/SuratIzinKolektifInterface2026 , menandatanganinya secara basah, dan menyerahkan seluruh berkasnya ke Field Commander (Korlap)."
  },
  {
    type: "cross",
    question: "Merch wajib ngga kak? Dan yang ngga beli merch, piko nya gimana ya kak?",
    answer:
      "Pembelian merch tidak bersifat wajib, ya! Bagi peserta yang tidak membeli merch, pembuatan baju Piko dapat disesuaikan dengan ketentuan logo pada buku panduan serta kreativitas masing-masing. "
  },
  {
    type: "circle",
    question: "Kak, kapan aja sih tanggal pelaksanaan rangkaian Osjur INTERFACE 2026?",
    answer:
      "Perjalananmu di INTERFACE 2026 akan dimulai dari Chapter 1 pada tanggal 5 September 2026, kemudian berlanjut ke Chapter 2 pada 6 September 2026, Connection Chapter pada 10 September 2026, hingga quest terakhir yaitu Next Chapter yang digelar pada 11–13 September 2026. Siapkan energimu dan ikuti seluruh rangkaiannya! "
  },
];

function SquareIcon() {
  return (
    <svg
      className="faq-square-icon"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="4.992" fill="#FF59FB" />

      <rect
        x="3.01"
        y="3.01"
        width="25.98"
        height="25.98"
        rx="2.912"
        stroke="#FFFFFF"
        strokeWidth="2.129"
      />
    </svg>
  );
}

function FAQIcon({ type }) {
  return (
    <span className={`faq-question-icon faq-question-icon--${type}`}>
      {type === "square" ? (
        <SquareIcon />
      ) : (
        <img
          src={iconAssets[type]}
          alt=""
          aria-hidden="true"
          draggable="false"
        />
      )}
    </span>
  );
}

function ChevronIcon() {
  return (
    <svg
      className="faq-chevron-icon"
      viewBox="0 0 35 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.33 19.16L0 3.83L3.83 0L17.24 13.41L30.65 0L34.48 3.83L19.16 19.16C18.65 19.67 17.96 19.95 17.24 19.95C16.52 19.95 15.83 19.67 15.33 19.16Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

function AnswerContent({ answer }) {
  const parts = String(answer ?? "").split(/(https?:\/\/[^\s]+)/g);

  return (
    <>
      {parts.map((part, index) =>
        /^https?:\/\//.test(part) ? (
          <a
            href={part}
            key={`${part}-${index}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part}
          </a>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchFAQ() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/faq`
        );
        const data = await response.json();

        if (response.ok && data.success) {
          setQuestions(data.questions);
        }
      } catch (error) {
        console.error("Error fetching FAQ:", error);
      }
    }

    fetchFAQ();
  }, []);

  const faqItems =
    questions.length > 0
      ? questions.map((item, index) => ({
          id: item.id,
          type: defaultFaqItems[index % defaultFaqItems.length].type,
          question: item.pertanyaan,
          answer: item.jawaban,
        }))
      : defaultFaqItems;

  const toggleFaq = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index));
  };

  return (
    <main className="faq-page-section">
      <BackgroundPattern />
      <div className="faq-layout">
        <div className="faq-triangle-decor" aria-hidden="true">
          <img src={triangleAsset} alt="" draggable="false" />
        </div>

        <div className="faq-cross-decor" aria-hidden="true">
          <img src={crossAsset} alt="" draggable="false" />
        </div>

        <div className="faq-left-side">
          <h1 className="faq-title" aria-label="Pertanyaan Umum FAQ">
            <span className="faq-title-row">
              <span className="faq-title-big">P</span>
              <span className="faq-title-white">ERTANYAAN</span>
            </span>

            <span className="faq-title-row">
              <span className="faq-title-big">U</span>
              <span className="faq-title-white">MUM</span>
            </span>

            <span className="faq-title-row">
              <span className="faq-title-big">(FAQ)</span>
            </span>
          </h1>

            <a
              href="https://www.instagram.com/himailkomunnes/"
              className="faq-send-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "24px", display: "inline-block" }}
            >
              SEND QUESTION HERE!
            </a>
        </div>

        <div className="faq-right-side">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={item.id ?? `${item.type}-${index}`}
              >
                <button
                  type="button"
                  className="faq-question-header"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="faq-question-left">
                    <FAQIcon type={item.type} />

                    <span className="faq-question-text">
                      {item.question}
                    </span>
                  </span>

                  <span className="faq-chevron">
                    <ChevronIcon />
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer" id={answerId}>
                    <p className="faq-answer-text">
                      <AnswerContent answer={item.answer} />
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
