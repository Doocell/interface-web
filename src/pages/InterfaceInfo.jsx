import BackgroundPattern from "../components/layout/BackgroundPattern";

// Assets from Figma
const imgGroup100915 = "https://www.figma.com/api/mcp/asset/c0dba49b-dc8d-4982-a28d-4ace0baba4e7.svg";
const imgGroup100996 = "https://www.figma.com/api/mcp/asset/11ed3e9c-a351-4e1a-8077-76f644676123.svg";
const imgElemenLingkaran = "https://www.figma.com/api/mcp/asset/d51580ab-3eb4-4bbb-b607-3d8ca7601567.svg";
const imgWeuiArrowFilled = "https://www.figma.com/api/mcp/asset/07bdeb0b-fe11-4e3e-97a7-3c22bb656ac3.svg";

export default function InterfaceInfo() {
  return (
    <>
      <BackgroundPattern />
      <main className="interface-info-page">
      <style>{`
        .interface-info-page {
          position: relative;
          min-height: 100vh;
          background: #685abb;
          overflow-x: hidden;
          padding-top: 120px;
          padding-bottom: 80px;
        }

        /* Background pattern */
        .info-bg-pattern {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          opacity: 0.25;
          z-index: 0;
        }

        .info-bg-pattern img {
          position: absolute;
          left: -10%;
          width: 120%;
          height: auto;
          object-fit: cover;
        }

        .info-bg-pattern img:first-child {
          top: 0;
        }

        .info-bg-pattern img:last-child {
          top: 700px;
        }

        /* Decorative elements */
        .info-decor-square {
          position: absolute;
          right: 5%;
          top: 30%;
          width: 200px;
          height: 200px;
          pointer-events: none;
          z-index: 1;
          animation: floatSquare 6s ease-in-out infinite;
        }

        .info-decor-circle {
          position: absolute;
          left: 3%;
          top: 55%;
          width: 200px;
          height: 200px;
          pointer-events: none;
          z-index: 1;
          animation: floatCircle 7s ease-in-out infinite;
        }

        @keyframes floatSquare {
          0%, 100% { transform: translate(0, 0) rotate(64.35deg); }
          50% { transform: translate(-10px, -15px) rotate(70deg); }
        }

        @keyframes floatCircle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, -10px) scale(1.05); }
        }

        /* Main content */
        .info-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Title */
        .info-title {
          font-family: 'Tektur', sans-serif;
          font-weight: 800;
          text-align: center;
          text-transform: uppercase;
          margin-bottom: clamp(60px, 10vw, 100px);
        }

        .info-title h1 {
          margin: 0;
          line-height: 1.1;
        }

        .info-title-line {
          display: block;
          margin-bottom: 8px;
        }

        .info-title-yellow {
          font-size: clamp(50px, 8vw, 100px);
          color: #FFD900;
          text-shadow: 6px 5px 0px #AC4AFD, 0px 0px 8px rgba(255,255,255,0.5);
        }

        .info-title-white {
          font-size: clamp(50px, 8vw, 100px);
          color: #ffffff;
          text-shadow: 6px 5px 0px #AC4AFD, 0px 0px 8px rgba(255,255,255,0.5);
        }

        /* Info section */
        .info-section {
          position: relative;
          max-width: 900px;
          margin: 0 auto clamp(80px, 12vw, 160px);
        }

        .info-label-wrapper {
          position: relative;
          z-index: 2;
          margin-bottom: -25px;
          animation: labelIn 0.6s ease both;
        }

        .info-label-wrapper.align-left {
          display: flex;
          justify-content: flex-start;
          padding-left: clamp(20px, 5vw, 60px);
        }

        .info-label-wrapper.align-right {
          display: flex;
          justify-content: flex-end;
          padding-right: clamp(20px, 5vw, 60px);
        }

        @keyframes labelIn {
          from {
            opacity: 0;
            transform: translateY(20px) rotate(0deg);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .info-label {
          display: inline-block;
          padding: 12px 32px;
          border-radius: 12px;
          font-family: 'Londrina Solid', cursive;
          font-weight: 900;
          font-size: clamp(22px, 3.5vw, 38px);
          text-transform: uppercase;
          text-align: center;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
          white-space: nowrap;
          transition: transform 0.3s ease;
        }

        .info-label:hover {
          transform: rotate(0deg) scale(1.05);
        }

        .info-label.yellow {
          background: #FFFBE4;
          border: 5px solid #FFD900;
          color: #DFB009;
          box-shadow: 0 0 30px rgba(255, 217, 0, 0.6);
          transform: rotate(-2.5deg);
        }

        .info-label.blue {
          background: #D5EEFF;
          border: 5px solid #189CF4;
          color: #189CF4;
          box-shadow: 0 0 25px rgba(24, 156, 244, 0.6);
          transform: rotate(-2.8deg);
        }

        .info-box {
          position: relative;
          background: rgba(41, 54, 62, 0.7);
          backdrop-filter: blur(10px);
          border-radius: clamp(16px, 3vw, 28px);
          padding: clamp(32px, 5vw, 60px);
          animation: boxIn 0.7s ease 0.2s both;
        }

        @keyframes boxIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .info-box.yellow {
          border: 6px solid #FFD900;
          box-shadow: 0 0 40px rgba(255, 217, 0, 0.5);
        }

        .info-box.blue {
          border: 6px solid #189CF4;
          box-shadow: 0 0 40px rgba(24, 156, 244, 0.5);
        }

        .info-text {
          font-family: 'Londrina Solid', cursive;
          font-weight: 300;
          font-size: clamp(16px, 2vw, 28px);
          line-height: 1.6;
          color: #ffffff;
          margin: 0;
        }

        .info-text.align-right {
          text-align: right;
        }

        /* More button */
        .info-more-button-wrapper {
          display: flex;
          justify-content: center;
          margin-top: clamp(60px, 10vw, 100px);
        }

        .info-more-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: clamp(180px, 25vw, 240px);
          height: clamp(70px, 10vw, 90px);
          background: #FFD900;
          border: none;
          border-radius: 14px;
          box-shadow: 
            inset -4px -4px 4px 0px rgba(0,0,0,0.25),
            inset 5px 4px 4px 0px #FCEB8A,
            0 6px 15px rgba(0,0,0,0.3);
          cursor: pointer;
          transform: rotate(0.5deg);
          transition: all 0.3s ease;
        }

        .info-more-button:hover {
          transform: rotate(0.5deg) translateY(-4px) scale(1.05);
          box-shadow: 
            inset -4px -4px 4px 0px rgba(0,0,0,0.25),
            inset 5px 4px 4px 0px #FCEB8A,
            0 10px 25px rgba(0,0,0,0.4);
        }

        .info-more-button:active {
          transform: rotate(0.5deg) translateY(-2px) scale(1.02);
        }

        .info-more-text {
          font-family: 'Tektur', sans-serif;
          font-weight: 800;
          font-size: clamp(24px, 3.5vw, 34px);
          color: #ffffff;
          text-transform: uppercase;
          text-shadow: 0px 5px 3px rgba(0,0,0,0.4), 0px 3px 0px #AC4AFD;
          line-height: 1;
        }

        .info-more-arrow {
          width: clamp(24px, 3.5vw, 32px);
          height: auto;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .interface-info-page {
            padding-top: 100px;
            padding-bottom: 60px;
          }

          .info-content {
            padding: 0 20px;
          }

          .info-label-wrapper.align-left,
          .info-label-wrapper.align-right {
            justify-content: center;
            padding: 0;
          }

          .info-text.align-right {
            text-align: left;
          }

          .info-decor-square,
          .info-decor-circle {
            width: 120px;
            height: 120px;
            opacity: 0.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .info-decor-square,
          .info-decor-circle {
            animation: none !important;
          }
          
          .info-label-wrapper,
          .info-box {
            animation: none !important;
          }
        }
      `}</style>

      {/* Background Pattern */}
      <div className="info-bg-pattern" aria-hidden="true">
        <img src={imgGroup100915} alt="" />
        <img src={imgGroup100996} alt="" />
      </div>

      {/* Decorative Square */}
      <div className="info-decor-square" aria-hidden="true">
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '80%',
            height: '80%',
            background: '#FF59FB',
            borderRadius: '25px',
            transform: 'rotate(64.35deg)'
          }} />
        </div>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '65%',
            height: '65%',
            border: '10px solid white',
            borderRadius: '15px',
            transform: 'rotate(64.35deg)'
          }} />
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="info-decor-circle" aria-hidden="true">
        <img src={imgElemenLingkaran} alt="" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Main Content */}
      <div className="info-content">
        {/* Title */}
        <div className="info-title">
          <h1>
            <span className="info-title-line">
              <span className="info-title-yellow">I</span>
              <span className="info-title-white">NTERFACE</span>
            </span>
            <span className="info-title-line">
              <span className="info-title-yellow">I</span>
              <span className="info-title-white">NFORMATION</span>
            </span>
          </h1>
        </div>

        {/* Section 1: Apa Itu Interface */}
        <div className="info-section">
          <div className="info-label-wrapper align-left">
            <div className="info-label yellow">
              Apa itu interface?
            </div>
          </div>
          <div className="info-box yellow">
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* Section 2: Tujuan Interface */}
        <div className="info-section">
          <div className="info-label-wrapper align-right">
            <div className="info-label blue">
              Tujuan interface
            </div>
          </div>
          <div className="info-box blue">
            <p className="info-text align-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* More Button */}
        <div className="info-more-button-wrapper">
          <button className="info-more-button" aria-label="Lihat lebih banyak informasi">
            <span className="info-more-text">More</span>
            <img 
              src={imgWeuiArrowFilled} 
              alt="" 
              className="info-more-arrow"
            />
          </button>
        </div>
      </div>
    </main>
    </>
  );
}