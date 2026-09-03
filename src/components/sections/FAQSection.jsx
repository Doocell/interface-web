// import { useState } from "react";
// import "../../styles/FAQSection.css";

// const faqItems = [
//   {
//     type: "triangle",
//     question: "Lorem Ipsum Dolor Sit Amet?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
//   {
//     type: "square",
//     question: "Lorem Ipsum Dolor Sit Amet?",
//     answer:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   },
//   {
//     type: "cross",
//     question: "Lorem Ipsum Dolor Sit Amet?",
//     answer:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     type: "circle",
//     question: "Lorem Ipsum Dolor Sit Amet?",
//     answer:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
// ];

// function DropdownIcon({ open }) {
//   return (
//     <svg
//       className={`faq-dropdown-svg ${open ? "open" : ""}`}
//       viewBox="0 0 35 20"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M15.33 19.16L0 3.83L3.83 0L17.24 13.41L30.65 0L34.48 3.83L19.16 19.16C18.65 19.67 17.96 19.95 17.24 19.95C16.52 19.95 15.83 19.67 15.33 19.16Z"
//         fill="white"
//       />
//     </svg>
//   );
// }

// function TriangleIcon() {
//   return (
//     <svg
//       className="faq-icon-svg"
//       viewBox="0 0 36 36"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M18 3L34 31H2L18 3Z"
//         fill="#9513FF"
//         stroke="white"
//         strokeWidth="3"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }

// function SquareIcon() {
//   return (
//     <svg
//       className="faq-icon-svg"
//       viewBox="0 0 32 32"
//       fill="none"
//       aria-hidden="true"
//     >
//       <rect width="32" height="32" rx="4.99" fill="#FF59FB" />
//       <rect
//         x="5.1"
//         y="5.1"
//         width="21.8"
//         height="21.8"
//         rx="1.8"
//         stroke="white"
//         strokeWidth="2.2"
//       />
//     </svg>
//   );
// }

// function CrossIcon() {
//   return (
//     <svg
//       className="faq-icon-svg"
//       viewBox="0 0 32 32"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M6.53 1.58L.78 7.33l9.54 9.55-9.28 9.28 5.84 5.83 9.51-9.51 10.01 10.01 5.59-5.78-9.56-9.56c3.71-3.72 5.78-5.61 9.48-9.33l-5.99-5.97-9.55 9.59L6.53 1.58Z"
//         fill="#3498DB"
//       />
//       <path
//         d="M3.13 7.56 12.04 16.36l.51.5-.51.5-8.65 8.48 3.59 3.58 8.82-8.64.5-.49.49.49 9.48 9.51 3.56-3.56-9.14-9.19-.49-.5.49-.49 4.59-4.62c1.37-1.38 2.74-2.76 4.1-4.12l-3.66-3.62-8.85 8.9-.49.5-.5-.49-9.19-9.09-3.56 3.56Z"
//         stroke="white"
//         strokeWidth="1.4"
//       />
//     </svg>
//   );
// }

// function CircleIcon() {
//   return (
//     <svg
//       className="faq-icon-svg"
//       viewBox="0 0 32 32"
//       fill="none"
//       aria-hidden="true"
//     >
//       <circle cx="16" cy="16" r="16" fill="#FFD900" />
//       <circle cx="16" cy="16" r="11.8" stroke="white" strokeWidth="2.2" />
//     </svg>
//   );
// }

// function FAQIcon({ type }) {
//   if (type === "square") return <SquareIcon />;
//   if (type === "cross") return <CrossIcon />;
//   if (type === "circle") return <CircleIcon />;
//   return <TriangleIcon />;
// }

// function RightDecorShape() {
//   return (
//     <svg
//       className="faq-right-decor"
//       viewBox="0 0 260 260"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M95.6 38.3C106.6 23.1 129 22.2 141.1 36.4L233.7 145C245.8 159.2 241.9 181.4 225.8 190.4L102.7 259.1C86.6 268.1 66.8 257.3 62.4 238.9L28.7 98.4C24.3 80 42.2 62.9 60.2 68.2L95.6 38.3Z"
//         fill="#9513FF"
//       />
//       <path
//         d="M96.2 51.5C103.5 41.4 118.4 40.8 126.5 50.2L220.3 159.9C228.4 169.4 225.8 184.2 215.1 190.2L99.7 254.6C89 260.5 75.8 253.3 72.9 241.1L40.9 107.6C38 95.3 49.9 83.9 61.9 87.5L96.2 51.5Z"
//         stroke="white"
//         strokeWidth="11"
//       />
//     </svg>
//   );
// }

// function LeftCrossDecorShape() {
//   return (
//     <svg
//       className="faq-left-decor"
//       viewBox="0 0 240 240"
//       fill="none"
//       aria-hidden="true"
//     >
//       <path
//         d="M154.7 20.8L195.8 50.9L146 119.2L212.4 167.6L181.9 209.3L113.9 159.7L61.6 231.3L21.4 201L71.3 132.6C44.8 113.2 30.1 103.5 3.6 84.1L34.9 41.3L103.3 91.4L154.7 20.8Z"
//         fill="#3498DB"
//       />
//       <path
//         d="M181.3 54.6L134.8 117.6L132 121.3L135.8 124L197.4 168L178.9 193.4L116.1 148.5L112.4 145.9L109.7 149.6L60.4 217.5L35.1 199.1L82.7 133.4L85.3 129.8L81.7 127.1L65.2 115.1C59.7 111 54.2 107 48.7 102.9C38.9 95.8 29.2 88.6 19.3 81.5L38.4 55.8L101.7 102.2L105.4 104.9L108.1 101.2L156 36.2L181.3 54.6Z"
//         stroke="white"
//         strokeWidth="9"
//       />
//     </svg>
//   );
// }

// function FAQTitle() {
//   return (
//     <div className="faq-title-wrap">
//       <h2 className="faq-title" aria-label="Pertanyaan Umum FAQ">
//         <span className="faq-title-row">
//           <span className="faq-title-yellow faq-title-big">P</span>
//           <span className="faq-title-white">ERTANYAAN</span>
//         </span>

//         <span className="faq-title-row">
//           <span className="faq-title-yellow faq-title-big">U</span>
//           <span className="faq-title-white">MUM</span>
//           <span className="faq-title-yellow faq-title-faq">(FAQ)</span>
//         </span>
//       </h2>
//     </div>
//   );
// }

// export default function FAQSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const toggleFaq = (index) => {
//     setActiveIndex((prev) => (prev === index ? -1 : index));
//   };

//   return (
//     <section className="faq-section" id="faq">
//       <RightDecorShape />
//       <LeftCrossDecorShape />

//       <div className="faq-container">
//         <div className="faq-left">
//           <FAQTitle />

//                   <a href="https://www.instagram.com/himailkomunnes/" className="faq-send-btn" target="_blank" rel="noopener noreferrer">
//                     SEND QUESTION HERE!
//                   </a>
//           </div>

//         <div className="faq-right">
//           <div className="faq-list">
//             {faqItems.map((item, index) => {
//               const open = activeIndex === index;

//               return (
//                 <div className={`faq-item ${open ? "is-open" : ""}`} key={index}>
//                   <button
//                     type="button"
//                     className="faq-question"
//                     onClick={() => toggleFaq(index)}
//                     aria-expanded={open}
//                   >
//                     <span className="faq-question-left">
//                       <span className="faq-icon-holder">
//                         <FAQIcon type={item.type} />
//                       </span>

//                       <span className="faq-question-text">{item.question}</span>
//                     </span>

//                     <span className="faq-question-right">
//                       <DropdownIcon open={open} />
//                     </span>
//                   </button>

//                   <div className="faq-answer">
//                     <p>{item.answer}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }