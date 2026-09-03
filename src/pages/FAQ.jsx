// src/pages/FAQ.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import circleAsset from "../assets/leaderboard/elemen-lingkaran.svg";
import triangleAsset from "../assets/leaderboard/elemen-segitiga.svg";
import crossAsset from "../assets/leaderboard/elemen-x.svg";
import BackgroundPattern from "../components/layout/BackgroundPattern";
import { supabase } from "../lib/supabase";
import "../styles/FAQSection.css";

const iconAssets = {
  triangle: triangleAsset,
  cross: crossAsset,
  circle: circleAsset,
};

const defaultFaqItems = [
  {
    type: "triangle",
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    type: "square",
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    type: "cross",
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    type: "circle",
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!supabase) return undefined;

    let cancelled = false;

    async function fetchFAQ() {
      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .eq("status", "answered")
        .order("created_at", { ascending: false });

      if (!cancelled && !error) {
        setQuestions(Array.isArray(data) ? data : []);
      }
    }

    fetchFAQ();

    return () => {
      cancelled = true;
    };
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
                    <p className="faq-answer-text">{item.answer}</p>
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