// Sponsor Besar (Large)
const SPONSORS_TOP = [
  {
    id: "top-1",
    name: "Bank Jateng",
    logo: "/Logo Sponsor/Bank Jateng (L) 1.svg",
    accent: "#FFD900",
  },
  {
    id: "top-2",
    name: "BCA",
    logo: "/Logo Sponsor/BCA (L) 1.svg",
    accent: "#FF59FB",
  },
  {
    id: "top-3",
    name: "BTN",
    logo: "/Logo Sponsor/BTN (L) 1.svg",
    accent: "#189CF4",
  },
  {
    id: "top-4",
    name: "TraveLinkHT",
    logo: "/Logo Sponsor/TraveLinkHT (L) 1.svg",
    accent: "#9513FF",
  },
  {
    id: "top-5",
    name: "69",
    logo: "/Logo Sponsor/69 (M) 1.svg",
    accent: "#FFD900",
  },
  {
    id: "top-6",
    name: "Group",
    logo: "/Logo Sponsor/Group 101463.svg",
    accent: "#FF59FB",
  },
  {
    id: "top-7",
    name: "Mask Group",
    logo: "/Logo Sponsor/Mask group.svg",
    accent: "#189CF4",
    invert: true,
  },
];

// Sponsor Kecil (Small)
const SPONSORS_BOTTOM = [
  {
    id: "bottom-1",
    name: "Kembar Printing",
    logo: "/Logo Sponsor/Kembar Printing (S) 1.svg",
    accent: "#FFD900",
  },
  {
    id: "bottom-2",
    name: "Mahaleza",
    logo: "/Logo Sponsor/Mahaleza (S) 1.svg",
    accent: "#FF59FB",
  },
  {
    id: "bottom-3",
    name: "Nakama",
    logo: "/Logo Sponsor/Nakama (S) 1.svg",
    accent: "#189CF4",
  },
  {
    id: "bottom-4",
    name: "Qtea",
    logo: "/Logo Sponsor/qtea (S) 1.svg",
    accent: "#9513FF",
  },
  {
    id: "bottom-5",
    name: "Ushapp",
    logo: "/Logo Sponsor/Ushapp (S) 1.svg",
    accent: "#FF59FB",
  },
  {
    id: "bottom-6",
    name: "Virgin Cake and Bakery",
    logo: "/Logo Sponsor/VIRGIN CAKE AND BAKERY (S) 1.svg",
    accent: "#FFD900",
  },
];


function SponsorCard({ sponsor }) {
  return (
    <article
      className="sp-card"
      style={{
        "--sp-accent": sponsor.accent,
      }}
    >
      <div className="sp-card__inside">
        {sponsor.logo ? (
          <img
            src={sponsor.logo}
            alt={sponsor.name}
            className={`sp-card__logo${sponsor.invert ? " sp-card__logo--invert" : ""}`}
            draggable="false"
          />
        ) : (
          <span className="sp-card__placeholder">
            {sponsor.name}
          </span>
        )}
      </div>
    </article>
  );
}


function SponsorTrack({
  sponsors,
  reverse = false,
}) {
  const loopData = [
    ...sponsors,
    ...sponsors,
  ];

  return (
    <div
      className={`
        sp-track
        ${reverse ? "sp-track--reverse" : ""}
      `}
    >
      {loopData.map((sponsor, index) => (
        <SponsorCard
          key={`${sponsor.id}-${index}`}
          sponsor={sponsor}
        />
      ))}
    </div>
  );
}


export default function SponsorSection() {
  return (
    <>
      <style>{`

        /* =================================================
           SECTION
        ================================================= */

        .sp-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: transparent;

          scroll-margin-top:
            calc(
              var(--navbar-height, 82px)
              + 18px
            );
        }


        /* =================================================
           FIGMA FRAME
           1440 × 1218
        ================================================= */

        .sp-frame {
          position: relative;

          width:
            min(
              100%,
              1440px
            );

          aspect-ratio:
            1440 / 1218;

          margin-inline: auto;

          container-type: inline-size;

          isolation: isolate;
        }


        /* =================================================
           TITLE

           FIX:
           Sponsor + & + Partner sekarang berada dalam
           satu flex row.

           Jadi & tidak mungkin menimpa huruf P lagi.
        ================================================= */

        .sp-title {
          position: absolute;

          left: 50%;

          top: 8.9%;

          z-index: 20;

          transform:
            translateX(-50%);

          width: max-content;

          display: flex;

          align-items: center;

          justify-content: center;

          white-space: nowrap;

          pointer-events: none;
        }


        /* =================================================
           SPONSOR / PARTNER WORD
        ================================================= */

        .sp-title__word {
          display: flex;

          align-items: baseline;

          font-family:
            "Tektur",
            sans-serif;

          font-weight: 800;

          text-transform: uppercase;

          white-space: nowrap;

          text-shadow:
            0.555cqw
            0.486cqw
            0
            rgba(
              172,
              74,
              253,
              1
            );
        }


        .sp-title__first {
          color: #FFD900;

          font-size:
            6.516cqw;

          line-height:
            4.887cqw;
        }


        .sp-title__rest {
          color: #FFFFFF;

          font-size:
            5.865cqw;

          line-height:
            4.399cqw;
        }


        /* =================================================
           AMPERSAND

           Figma:
           135.37px
           rotate(-5deg)

           Tambahan ruang kanan membuat P tidak tertimpa.
        ================================================= */

        .sp-title__amp-wrap {
          position: relative;

          flex: 0 0 auto;

          width:
            10.45cqw;

          height:
            8.2cqw;

          margin-left:
            1.75cqw;

          margin-right:
            2.4cqw;
        }


        .sp-title__amp {
          position: absolute;

          left: 50%;

          top: 50%;

          color: #FFD900;

          font-family:
            "Tektur",
            sans-serif;

          font-size:
            9.401cqw;

          font-weight: 800;

          line-height:
            7.051cqw;

          transform:
            translate(
              -50%,
              -50%
            )
            rotate(-5deg);

          transform-origin:
            center;

          text-shadow:
            0.625cqw
            0.555cqw
            0
            rgba(
              172,
              74,
              253,
              1
            );
        }


        /* =================================================
           FULL WIDTH BOARD
        ================================================= */

        .sp-board {

  position: absolute;

  left: 50%;

  top: 26.44%;

  z-index: 5;

  width: 100vw;

  height: 47.57%;

  transform:
    translateX(-50%);

  overflow: hidden;


  /*
    UPDATE:
    opacity panel Figma 60%
  */

  background:
    rgba(
      38,
      53,
      60,
      0.60
    );


  border-top:
    2.43px
    solid
    #FFFFFF;


  border-bottom:
    2.43px
    solid
    #FFFFFF;

}


        /* =================================================
           DARK BOARD PATTERN
        ================================================= */

        .sp-board::before {
          content: "";

          position: absolute;

          inset: 0;

          pointer-events: none;

          opacity: 0.30;

          background:
            radial-gradient(
              circle,
              #7E7E7E 0 8px,
              transparent 9px
            );

          background-size:
            135px
            116px;

          background-position:
            54px
            50px;
        }


        .sp-board__content {
          position: relative;

          width: 100%;

          height: 100%;

          overflow: hidden;
        }


        /* =================================================
           ROWS
        ================================================= */

        .sp-row {
          position: absolute;

          left: 0;

          width: 100%;

          height: 175.28px;

          overflow: visible;

          display: flex;

          align-items: center;
        }


        .sp-row--top {
          top: 14.84%;
        }


        .sp-row--bottom {
          top: 52.81%;
        }


        /* =================================================
           TRACK
        ================================================= */

        .sp-track {
          position: relative;

          display: flex;

          flex: none;

          align-items: center;

          gap: 30px;

          width: max-content;

          padding-right: 30px;

          will-change: transform;

          animation:
            sp-roll-left
            26s
            linear
            infinite;
        }


        .sp-track--reverse {
          animation:
            sp-roll-right
            26s
            linear
            infinite;
        }


        .sp-board:hover
        .sp-track {
          animation-play-state: paused;
        }


        /* =================================================
           CARD
           FIGMA = 288 × 175.28
        ================================================= */

        .sp-card {
          position: relative;

          flex:
            0
            0
            288px;

          width: 288px;

          height: 175.28px;

          padding: 5.37px;

          border-radius: 9.77px;

          background:
            var(--sp-accent);

          box-shadow:
            0
            0
            6.52px
            var(--sp-accent);

          overflow: hidden;

          box-sizing: border-box;

          transition:
            transform
            180ms
            ease,
            filter
            180ms
            ease;
        }


        .sp-card__inside {
          position: relative;

          width: 100%;

          height: 100%;

          display: grid;

          place-items: center;

          overflow: hidden;

          background: #ffffff;
        }

        /* Mask group SVG has a light background — invert it to black */
        .sp-card__logo--invert {
          filter: invert(1);
        }


        /* =================================================
           LOGO
        ================================================= */

        .sp-card__logo {
          display: block;

          /* max size agar tidak terpotong */
          max-width: 82%;
          max-height: 75%;

          /* auto agar aspect ratio terjaga */
          width: auto;
          height: auto;

          object-fit: contain;

          /* pastikan selalu di tengah */
          margin: auto;

          user-select: none;

          pointer-events: none;
        }


        /* =================================================
           PLACEHOLDER
        ================================================= */

        .sp-card__placeholder {
          color:
            rgba(
              255,
              255,
              255,
              0.39
            );

          font-family:
            "Tektur",
            sans-serif;

          font-size: 18px;

          font-weight: 800;

          line-height: 1;

          text-align: center;

          text-transform: uppercase;

          pointer-events: none;
        }


        /* =================================================
           HOVER
        ================================================= */

        @media (hover: hover) {

          .sp-card:hover {
            transform:
              scale(1.025);

            filter:
              brightness(1.07);
          }

        }


        /* =================================================
           ROLLING
        ================================================= */

        @keyframes sp-roll-left {

          from {
            transform:
              translateX(-21px);
          }

          to {
            transform:
              translateX(
                calc(
                  -50%
                  - 15px
                  - 21px
                )
              );
          }

        }


        @keyframes sp-roll-right {

          from {
            transform:
              translateX(
                calc(
                  -50%
                  - 15px
                  - 21px
                )
              );
          }

          to {
            transform:
              translateX(-21px);
          }

        }


        /* =================================================
           DESKTOP > 1440
        ================================================= */

        @media (
          min-width:
          1441px
        ) {

          .sp-frame {
            width: 1440px;

            height: 1218px;
          }

        }


        /* =================================================
           TABLET
        ================================================= */

        @media (
          max-width:
          900px
        ) {

          .sp-card {
            flex-basis: 210px;

            width: 210px;

            height: 128px;

            padding: 4px;
          }


          .sp-row {
            height: 128px;
          }


          .sp-track {
            gap: 22px;
          }


          .sp-card__placeholder {
            font-size: 12px;
          }

        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (
          max-width:
          600px
        ) {

          .sp-card {
            flex-basis: 145px;

            width: 145px;

            height: 88px;

            padding: 3px;

            border-radius: 5px;
          }


          .sp-row {
            height: 88px;
          }


          .sp-track {
            gap: 14px;
          }


          .sp-card__placeholder {
            font-size: 8px;
          }

        }


        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .sp-track {
            animation: none;
          }


          .sp-card {
            transition: none;
          }

        }

      `}</style>


      <section
        id="sponsor"
        className="sp-section"
        aria-labelledby="sponsor-title"
      >

        <div className="sp-frame">

          {/* =========================
              TITLE
          ========================= */}

          <header
            id="sponsor-title"
            className="sp-title"
          >

            <div className="sp-title__word">
              <span className="sp-title__first">
                S
              </span>

              <span className="sp-title__rest">
                ponsor
              </span>
            </div>


            <div className="sp-title__amp-wrap">
              <span className="sp-title__amp">
                &
              </span>
            </div>


            <div className="sp-title__word">
              <span className="sp-title__first">
                P
              </span>

              <span className="sp-title__rest">
                artner
              </span>
            </div>

          </header>


          {/* =========================
              BOARD
          ========================= */}

          <div className="sp-board">

            <div className="sp-board__content">

              <div className="sp-row sp-row--top">
                <SponsorTrack
                  sponsors={
                    SPONSORS_TOP
                  }
                />
              </div>


              <div className="sp-row sp-row--bottom">
                <SponsorTrack
                  sponsors={
                    SPONSORS_BOTTOM
                  }
                  reverse
                />
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}