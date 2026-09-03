// src/components/sections/FooterSection.jsx - FIGMA: 1102:847

const FOOTER_ASSETS = {
  bgRectangle: "https://www.figma.com/api/mcp/asset/a19718f7-c936-44b0-8578-515bcc803828.svg",
  leftGradient: "https://www.figma.com/api/mcp/asset/80e2b250-0f71-4714-b1ca-f8e129d15566.svg",
  rightGradient: "https://www.figma.com/api/mcp/asset/b1b5c121-a706-4018-b723-aae62af7755c.svg",
  maskShape: "https://www.figma.com/api/mcp/asset/4af7cbcc-2045-4853-b040-46acb5162f87.svg",
};

export default function FooterSection() {
  return (
    <>
      <style>{`
        /* =================================================
           FOOTER SECTION
        ================================================= */

        .footer-section {
          position: relative;
          width: 100%;
          height: 123px;
          overflow: hidden;
          background: transparent;
          margin-top: 80px;
        }

        .footer-canvas {
          position: relative;
          width: 100%;
          height: 123px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* =================================================
           BACKGROUND SHAPE - FULL WIDTH
        ================================================= */

        .footer-bg {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%) skewX(-0.37deg);
          width: 100vw;
          height: 123px;
          z-index: 1;
        }

        .footer-bg img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        /* =================================================
           GRADIENT OVERLAYS (LEFT & RIGHT) - FULL WIDTH
        ================================================= */

        .footer-gradient {
          position: absolute;
          top: 0;
          width: 50vw;
          height: 302.233px;
          z-index: 2;
          pointer-events: none;
        }

        .footer-gradient--left {
          left: 0;
          mask-image: url("${FOOTER_ASSETS.maskShape}");
          mask-position: calc(50vw - 230px) 88px;
          mask-size: 1440px 123px;
          mask-repeat: no-repeat;
          -webkit-mask-image: url("${FOOTER_ASSETS.maskShape}");
          -webkit-mask-position: calc(50vw - 230px) 88px;
          -webkit-mask-size: 1440px 123px;
          -webkit-mask-repeat: no-repeat;
        }

        .footer-gradient--right {
          right: 0;
          left: auto;
          mask-image: url("${FOOTER_ASSETS.maskShape}");
          mask-position: calc(-50vw - 485px) 88px;
          mask-size: 1440px 123px;
          mask-repeat: no-repeat;
          -webkit-mask-image: url("${FOOTER_ASSETS.maskShape}");
          -webkit-mask-position: calc(-50vw - 485px) 88px;
          -webkit-mask-size: 1440px 123px;
          -webkit-mask-repeat: no-repeat;
        }

        .footer-gradient img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* =================================================
           LOGO
        ================================================= */

        .footer-logo {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 107.586px;
          height: 64.056px;
          z-index: 10;
          pointer-events: none;
        }

        .footer-logo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 8px rgba(255, 89, 251, 0.4));
        }

        /* =================================================
           COPYRIGHT TEXT
        ================================================= */

        .footer-copyright {
          position: absolute;
          left: 50%;
          bottom: 8px;
          transform: translateX(-50%);
          z-index: 10;
          font-family: "Tektur", sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          text-align: center;
          text-transform: capitalize;
          text-shadow: 0 0 16.742px rgba(255, 255, 255, 0.58);
          white-space: nowrap;
          pointer-events: none;
          line-height: 1;
        }

        /* =================================================
           TABLET
        ================================================= */

        @media (max-width: 1024px) {
          .footer-section {
            height: 100px;
            margin-top: 60px;
          }

          .footer-canvas {
            height: 100px;
          }

          .footer-bg {
            width: 100vw;
            height: 100px;
            transform: translateY(-50%) skewX(-0.37deg);
          }

          .footer-logo {
            width: 90px;
            height: 54px;
          }

          .footer-copyright {
            font-size: 16px;
            bottom: 6px;
          }
        }

        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 640px) {
          .footer-section {
            height: 80px;
            margin-top: 40px;
          }

          .footer-canvas {
            height: 80px;
          }

          .footer-bg {
            width: 100vw;
            height: 80px;
            transform: translateY(-50%) skewX(-0.2deg);
          }

          .footer-gradient {
            width: 50%;
            height: 200px;
          }

          .footer-gradient--left {
            mask-position: 200px 40px;
            mask-size: 800px 80px;
            -webkit-mask-position: 200px 40px;
            -webkit-mask-size: 800px 80px;
          }

          .footer-gradient--right {
            mask-position: -600px 40px;
            mask-size: 800px 80px;
            -webkit-mask-position: -600px 40px;
            -webkit-mask-size: 800px 80px;
          }

          .footer-logo {
            width: 70px;
            height: 42px;
          }

          .footer-copyright {
            font-size: 10px;
            bottom: 4px;
            max-width: 90%;
            white-space: normal;
            line-height: 1.2;
          }
        }

        /* =================================================
           SMALL MOBILE
        ================================================= */

        @media (max-width: 400px) {
          .footer-copyright {
            font-size: 8px;
          }
        }

        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .footer-bg {
            transform: translateY(-50%);
          }

          .footer-logo {
            transform: translate(-50%, -50%);
          }
        }
      `}</style>

      <footer className="footer-section" aria-label="Footer">
        <div className="footer-canvas">
          {/* Background Shape */}
          <div className="footer-bg" aria-hidden="true">
            <img src={FOOTER_ASSETS.bgRectangle} alt="" />
          </div>

          {/* Left Gradient Overlay */}
          <div className="footer-gradient footer-gradient--left" aria-hidden="true">
            <img src={FOOTER_ASSETS.leftGradient} alt="" />
          </div>

          {/* Right Gradient Overlay */}
          <div className="footer-gradient footer-gradient--right" aria-hidden="true">
            <img src={FOOTER_ASSETS.rightGradient} alt="" />
          </div>

          {/* Logo */}
          <div className="footer-logo">
            <img src="/Logo Interface w Border.svg" alt="INTERFACE Logo" />
          </div>

          {/* Copyright Text */}
          <p className="footer-copyright">
            COPYRIGHT @2026. INTERFACE PROJECT
          </p>
        </div>
      </footer>
    </>
  );
}
