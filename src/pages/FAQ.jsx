import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import BackgroundPattern from "../components/layout/BackgroundPattern";
import "../styles/FAQSection.css";

// Figma Asset URLs
const imgElemenSegitiga = "https://www.figma.com/api/mcp/asset/30980250-2181-4d73-a820-564dfbb8b439.svg";
const imgElemenX = "https://www.figma.com/api/mcp/asset/0ccf7fc0-1c28-4d9a-9c21-c658f531518f.svg";
const imgGroup101042 = "https://www.figma.com/api/mcp/asset/1ace6d9a-3289-4ef0-9486-c83b9c2e077a.svg";
const imgWeuiArrowFilled = "https://www.figma.com/api/mcp/asset/be1cf2a2-a5af-402d-a249-adcff38820bb.svg";
const imgGroup101043 = "https://www.figma.com/api/mcp/asset/db809479-16a1-4c1a-b4fd-0122acf38971.svg";
const imgGroup101044 = "https://www.figma.com/api/mcp/asset/6a81e2e0-0dab-4ad9-83a8-c73bdd3602d5.svg";

const defaultFaqItems = [
  {
    icon: imgGroup101042,
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    icon: imgGroup101043,
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: imgGroup101043,
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: imgGroup101044,
    question: "Lorem Ipsum Dolor Sit Amet?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchFAQ() {
      const { data } = await supabase
        .from("questions")
        .select("*")
        .eq("status", "answered")
        .order("created_at", { ascending: false });
      setQuestions(data || []);
    }
    fetchFAQ();
  }, []);

  // Use database questions if available, otherwise use default
  const faqItems = questions.length > 0 
    ? questions.map((q, idx) => ({
        icon: defaultFaqItems[idx % defaultFaqItems.length].icon,
        question: q.pertanyaan,
        answer: q.jawaban,
      }))
    : defaultFaqItems;

  const toggleFaq = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="faq-page-section">
      {/* Background Pattern Global */}
      <BackgroundPattern />

      {/* Decorative Triangle - Right Top */}
      <div className="faq-triangle-decor">
        <img 
          src={imgElemenSegitiga} 
          alt="" 
          className="faq-decor-img"
        />
      </div>

      {/* Decorative Cross - Left Bottom */}
      <div className="faq-cross-decor">
        <img 
          src={imgElemenX} 
          alt="" 
          className="faq-decor-img"
        />
      </div>

      {/* Main Content Container */}
      <div className="faq-container">
        {/* Left Side: Title and Button */}
        <div className="faq-left-side">
          {/* Title */}
          <div className="faq-title">
            <div className="faq-title-line">
              <span className="faq-title-letter-big">P</span>
              <span className="faq-title-text">ERTANYAAN</span>
            </div>
            <div className="faq-title-line">
              <span className="faq-title-letter-big">U</span>
              <span className="faq-title-text">MUM</span>
            </div>
            <div className="faq-title-line">
              <span className="faq-title-highlight">(FAQ)</span>
            </div>
          </div>

          {/* Send Question Button */}
          <button 
            className="faq-send-button"
            onClick={() => window.location.href = '/quest-collect'}
          >
            <span className="faq-send-button-text">SEND QUESTION HERE!</span>
          </button>
        </div>

        {/* Right Side: FAQ List */}
        <div className="faq-right-side">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index}
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
              >
                {/* Question Header */}
                <button 
                  className="faq-question-header"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question-left">
                    <img 
                      src={item.icon} 
                      alt="" 
                      className="faq-question-icon"
                    />
                    <span className="faq-question-text">
                      {item.question}
                    </span>
                  </div>
                  <div className="faq-chevron">
                    <img 
                      src={imgWeuiArrowFilled} 
                      alt="" 
                      className="faq-chevron-icon"
                    />
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="faq-answer">
                    <p className="faq-answer-text">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
