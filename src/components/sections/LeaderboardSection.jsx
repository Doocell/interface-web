import {
  useEffect,
  useMemo,
  useState,
} from "react";


/* =========================================================
   EDIT DATA LEADERBOARD DI SINI

   Anda cukup mengubah:
   - team
   - score

   Urutan ranking akan otomatis berdasarkan score terbesar.
   ========================================================= */

const LEADERBOARD_DATA = [
  {
    team: "TEAM ALPHA",
    score: 98,
  },
  {
    team: "TEAM BETA",
    score: 96,
  },
  {
    team: "TEAM GAMMA",
    score: 85,
  },
  {
    team: "TEAM DELTA",
    score: 75,
  },
  {
    team: "TEAM EPSILON",
    score: 65,
  },
];


/* =========================================================
   POSITION DATA
   Berdasarkan SVG asli Figma 1440 × 1628
   ========================================================= */

const ROWS = [
  {
    top: "41.51%",
    teamColor: "#F4BF32",
    scoreColor: "#20EA48",
  },
  {
    top: "49.72%",
    teamColor: "#FF59FB",
    scoreColor: "#3DEA20",
  },
  {
    top: "57.93%",
    teamColor: "#189CF4",
    scoreColor: "#189CF4",
  },
  {
    top: "66.11%",
    teamColor: "#FFFFFF",
    scoreColor: "#F4BF32",
  },
  {
    top: "74.33%",
    teamColor: "#FFFFFF",
    scoreColor: "#D00000",
  },
];


const PODIUMS = {
  first: {
    left: "63.72%",
    top: "12.14%",
    width: "15.28%",
    color: "#DFAF08",
  },

  second: {
    left: "47.76%",
    top: "17.25%",
    width: "15.28%",
    color: "#FF59FB",
  },

  third: {
    left: "79.77%",
    top: "19.22%",
    width: "15.28%",
    color: "#189CF4",
  },
};


/* =========================================================
   SVG LOADER
   ========================================================= */

function useLeaderboardSvg() {
  const [
    svgUrl,
    setSvgUrl,
  ] = useState("");


  useEffect(() => {
    let cancelled = false;
    let objectUrl = "";


    async function loadSvg() {
      try {
        const response =
          await fetch(
            "/leaderboard-section.svg"
          );


        if (!response.ok) {
          throw new Error(
            `Leaderboard SVG tidak ditemukan (${response.status})`
          );
        }


        const source =
          await response.text();


        const parser =
          new DOMParser();


        const documentSvg =
          parser.parseFromString(
            source,
            "image/svg+xml"
          );


        const svg =
          documentSvg.documentElement;


        const scene =
          svg.querySelector(
            ":scope > g"
          );


        if (!scene) {
          throw new Error(
            "Scene utama SVG Leaderboard tidak ditemukan."
          );
        }


        /*
          Simpan urutan children ASLI terlebih dahulu.

          Ini penting karena kita akan menghapus
          beberapa elemen berdasarkan struktur
          SVG asli dari Figma.
        */

        const originalChildren =
          Array.from(
            scene.children
          );


        /* ===============================================
           1. HAPUS BACKGROUND FIGMA

           Homepage kita sudah punya background/pattern.
           =============================================== */

        originalChildren.forEach(
          (node) => {
            const tag =
              node.tagName
                ?.toLowerCase();


            const fill =
              (
                node.getAttribute(
                  "fill"
                ) || ""
              ).toUpperCase();


            const opacity =
              node.getAttribute(
                "opacity"
              );


            const width =
              node.getAttribute(
                "width"
              );


            const height =
              node.getAttribute(
                "height"
              );


            const isMainBackground =
              tag === "rect" &&
              width === "1440" &&
              height === "1628" &&
              fill === "#685ABB";


            const isGlobalPattern =
              fill === "#4F429F" &&
              (
                opacity === "0.3" ||
                opacity === "0.30"
              );


            if (
              isMainBackground ||
              isGlobalPattern
            ) {
              node.remove();
            }
          }
        );


        /* ===============================================
           2. FIX ICON KUNING KIRI-BAWAH

           SVG asli menaruh pusat lingkaran sekitar x=14,
           sehingga sebagian terpotong frame.

           Kita geser seluruh group 100px ke kanan.
           =============================================== */

        const yellowEdgeDecoration =
          originalChildren[141];


        if (
          yellowEdgeDecoration &&
          yellowEdgeDecoration.querySelector(
            'circle[fill="#FFD900"]'
          )
        ) {
          yellowEdgeDecoration.setAttribute(
            "transform",
            "translate(100 0)"
          );
        }


        /* ===============================================
           3. HILANGKAN CLIP ROOT

           Supaya shadow/dekorasi pinggir tidak terpotong.
           =============================================== */

        scene.removeAttribute(
          "clip-path"
        );


        svg.setAttribute(
          "overflow",
          "visible"
        );


        svg.style.overflow =
          "visible";


        /* ===============================================
           4. HAPUS TEAM NAME + SCORE STATIS

           Karena sekarang akan diganti data React.

           Kita TIDAK menghapus:
           - rank 1/2/3/4/5
           - tulisan SCORE
           - border row
           - podium
           - crown
           =============================================== */

        const dynamicStaticIndexes = [
          146, // TEAM NAME rank 1
          148, // score 98

          151, // TEAM NAME rank 2
          153, // score 96

          155, // TEAM NAME rank 3
          158, // score 85

          160, // TEAM NAME rank 4
          165, // score 75

          167, // TEAM NAME rank 5
          172, // score 65
        ];


        dynamicStaticIndexes.forEach(
          (index) => {
            originalChildren[
              index
            ]?.remove();
          }
        );


        /* ===============================================
           5. HAPUS TEAM NAME STATIS PODIUM

           child 142 adalah podium group.

           Di dalamnya:
           13 = first team name
           15 = third team name
           17 = second team name
           =============================================== */

        const podiumGroup =
          originalChildren[142];


        if (podiumGroup) {
          const podiumChildren =
            Array.from(
              podiumGroup.children
            );


          [
            13,
            15,
            17,
          ].forEach(
            (index) => {
              podiumChildren[
                index
              ]?.remove();
            }
          );
        }


        /* ===============================================
           SVG RESPONSIVE
           =============================================== */

        svg.removeAttribute(
          "width"
        );

        svg.removeAttribute(
          "height"
        );


        svg.setAttribute(
          "viewBox",
          "0 0 1440 1628"
        );


        svg.setAttribute(
          "preserveAspectRatio",
          "xMidYMid meet"
        );


        const serializer =
          new XMLSerializer();


        const cleanedSvg =
          serializer.serializeToString(
            svg
          );


        const blob =
          new Blob(
            [cleanedSvg],
            {
              type:
                "image/svg+xml",
            }
          );


        objectUrl =
          URL.createObjectURL(
            blob
          );


        if (!cancelled) {
          setSvgUrl(
            objectUrl
          );
        }
      } catch (error) {
        console.error(
          "Gagal memuat Leaderboard:",
          error
        );
      }
    }


    loadSvg();


    return () => {
      cancelled = true;


      if (objectUrl) {
        URL.revokeObjectURL(
          objectUrl
        );
      }
    };
  }, []);


  return svgUrl;
}


/* =========================================================
   PODIUM NAME
   ========================================================= */

function PodiumName({
  team,
  position,
  active,
}) {
  return (
    <div
      className={`
        lb-podium-name
        ${active ? "is-active" : ""}
      `}
      style={{
        left:
          position.left,

        top:
          position.top,

        width:
          position.width,

        "--podium-color":
          position.color,
      }}
    >
      {team}
    </div>
  );
}


/* =========================================================
   LIVE ROW
   ========================================================= */

function LeaderboardRow({
  item,
  index,
  selected,
  onSelect,
  onHover,
}) {
  const row =
    ROWS[index];


  return (
    <button
      type="button"
      className={`
        lb-live-row
        ${
          selected
            ? "is-selected"
            : ""
        }
      `}
      style={{
        top:
          row.top,

        "--team-color":
          row.teamColor,

        "--score-color":
          row.scoreColor,
      }}
      onMouseEnter={() => {
        onHover(
          index
        );
      }}
      onMouseLeave={() => {
        onHover(
          null
        );
      }}
      onFocus={() => {
        onHover(
          index
        );
      }}
      onBlur={() => {
        onHover(
          null
        );
      }}
      onClick={() => {
        onSelect(
          index
        );
      }}
      aria-label={`
        Ranking ${index + 1},
        ${item.team},
        score ${item.score}
      `}
      aria-pressed={
        selected
      }
    >
      <span className="lb-live-row__team">
        {item.team}
      </span>

      <span className="lb-live-row__score">
        {item.score}
      </span>
    </button>
  );
}


/* =========================================================
   MAIN
   ========================================================= */

export default function LeaderboardSection() {
  const svgUrl =
    useLeaderboardSvg();


  const [
    selectedRank,
    setSelectedRank,
  ] = useState(null);


  const [
    hoveredRank,
    setHoveredRank,
  ] = useState(null);


  /*
    SCORE TERBESAR OTOMATIS MENJADI RANK 1
  */

  const leaderboard =
    useMemo(() => {
      const sorted = [
        ...LEADERBOARD_DATA,
      ].sort(
        (
          first,
          second
        ) =>
          second.score -
          first.score
      );


      /*
        Pastikan selalu ada 5 row.
      */

      while (
        sorted.length < 5
      ) {
        sorted.push({
          team:
            "TEAM NAME",

          score:
            0,
        });
      }


      return sorted.slice(
        0,
        5
      );
    }, []);


  const activeRank =
    hoveredRank ??
    selectedRank;


  return (
    <>
      <style>{`

        /* ================================================
           SECTION
           ================================================ */

        .lb-section {
          position: relative;

          width: 100%;

          overflow: visible;

          background: transparent;

          scroll-margin-top:
            calc(
              var(--navbar-height, 82px)
              + 18px
            );
        }


        /* ================================================
           FIGMA FRAME
           ================================================ */

        .lb-frame {
          position: relative;

          width:
            min(
              100%,
              1440px
            );

          aspect-ratio:
            1440 / 1628;

          margin-inline: auto;

          overflow: visible;

          isolation: isolate;

          container-type:
            inline-size;
        }


        /* ================================================
           ORIGINAL VECTOR
           ================================================ */

        .lb-art {
          position: absolute;

          inset: 0;

          z-index: 1;

          display: block;

          width: 100%;

          height: 100%;

          max-width: none;

          object-fit: contain;

          overflow: visible;

          user-select: none;

          pointer-events: none;
        }


        /* ================================================
           PODIUM LIVE TEAM NAME
           ================================================ */

        .lb-podium-name {
          position: absolute;

          z-index: 5;

          height: 2.8%;

          display: flex;

          align-items: center;

          justify-content: center;

          overflow: hidden;

          padding-inline:
            0.7cqw;

          color:
            var(--podium-color);

          font-family:
            "Tektur",
            sans-serif;

          font-size:
            1.05cqw;

          font-weight: 900;

          line-height: 1;

          text-align: center;

          text-transform:
            uppercase;

          white-space:
            nowrap;

          text-overflow:
            ellipsis;

          text-shadow:
            0
            0
            0.4cqw
            rgba(
              255,
              255,
              255,
              0.65
            );

          pointer-events:
            none;

          transform:
            translateY(0)
            scale(1);

          transition:
            transform
            180ms
            ease,
            filter
            180ms
            ease;
        }


        .lb-podium-name.is-active {
          transform:
            translateY(-0.18cqw)
            scale(1.035);

          filter:
            brightness(1.12);
        }


        /* ================================================
           INTERACTIVE ROW

           Koordinat border/tabel tetap berasal
           dari SVG asli.

           Button ini hanya menjadi layer transparan
           di atas row.
           ================================================ */

        .lb-live-row {
          position: absolute;

          left:
            8.134%;

          z-index: 6;

          width:
            83.72%;

          height:
            6.54%;

          margin: 0;

          padding: 0;

          border: 0;

          outline: 0;

          background:
            transparent;

          appearance: none;

          cursor: pointer;

          font-family:
            "Tektur",
            sans-serif;

          transform:
            translateY(0)
            scale(1);

          transform-origin:
            center;

          transition:
            transform
            160ms
            ease,
            background
            160ms
            ease,
            box-shadow
            160ms
            ease;
        }


        /* ================================================
           TEAM NAME
           ================================================ */

        .lb-live-row__team {
          position: absolute;

          left:
            13.1%;

          top: 50%;

          width:
            50%;

          transform:
            translateY(-50%);

          overflow: hidden;

          color:
            var(--team-color);

          font-size:
            2.05cqw;

          font-weight: 800;

          line-height: 1;

          letter-spacing:
            -0.025em;

          text-align: left;

          text-transform:
            uppercase;

          white-space:
            nowrap;

          text-overflow:
            ellipsis;

          text-shadow:
            0
            0
            0.36cqw
            color-mix(
              in srgb,
              var(--team-color) 45%,
              transparent
            );

          pointer-events:
            none;
        }


        /* ================================================
           SCORE NUMBER

           Label SCORE tetap dari SVG.
           Yang dinamis hanya angkanya.
           ================================================ */

        .lb-live-row__score {
          position: absolute;

          right:
            5.15%;

          top: 50%;

          transform:
            translateY(-50%);

          color:
            var(--score-color);

          font-size:
            2.05cqw;

          font-weight: 800;

          line-height: 1;

          text-align: right;

          text-shadow:
            0
            0
            0.35cqw
            color-mix(
              in srgb,
              var(--score-color) 42%,
              transparent
            );

          pointer-events:
            none;
        }


        /* ================================================
           HOVER / FOCUS
           ================================================ */

        @media (hover: hover) {

          .lb-live-row:hover {
            transform:
              translateY(-0.12cqw)
              scale(1.006);

            background:
              linear-gradient(
                90deg,
                transparent,
                rgba(
                  255,
                  255,
                  255,
                  0.045
                ),
                transparent
              );

            box-shadow:
              0
              0
              1cqw
              rgba(
                255,
                255,
                255,
                0.08
              );
          }

        }


        .lb-live-row:focus-visible {
          transform:
            translateY(-0.12cqw)
            scale(1.006);

          box-shadow:
            inset
            0
            0
            0
            0.16cqw
            rgba(
              255,
              255,
              255,
              0.8
            ),
            0
            0
            0.8cqw
            rgba(
              255,
              255,
              255,
              0.2
            );

          border-radius:
            0.8cqw;
        }


        .lb-live-row.is-selected {
          background:
            linear-gradient(
              90deg,
              transparent,
              rgba(
                255,
                255,
                255,
                0.065
              ),
              transparent
            );
        }


        /* ================================================
           LARGE DESKTOP

           Tidak terus membesar di monitor besar.
           ================================================ */

        @media (
          min-width:
          1441px
        ) {

          .lb-frame {
            width:
              1440px;

            height:
              1628px;
          }

        }


        /* ================================================
           TABLET
           ================================================ */

        @media (
          max-width:
          900px
        ) {

          .lb-podium-name {
            font-size:
              max(
                8px,
                1.05cqw
              );
          }


          .lb-live-row__team,
          .lb-live-row__score {
            font-size:
              max(
                12px,
                2.05cqw
              );
          }

        }


        /* ================================================
           MOBILE
           ================================================ */

        @media (
          max-width:
          600px
        ) {

          .lb-live-row__team,
          .lb-live-row__score {
            font-size:
              max(
                7px,
                2.05cqw
              );
          }


          .lb-podium-name {
            font-size:
              max(
                5px,
                1.05cqw
              );
          }

        }


        /* ================================================
           REDUCED MOTION
           ================================================ */

        @media (
          prefers-reduced-motion:
          reduce
        ) {

          .lb-live-row,
          .lb-podium-name {
            transition:
              none;
          }

        }

      `}</style>


      <section
        id="leaderboard"
        className="lb-section"
        aria-label="Leaderboard INTERFACE"
      >
        <div className="lb-frame">

          {/* =====================================
              SVG DESIGN ASLI
          ====================================== */}

          {svgUrl ? (
            <img
              src={svgUrl}
              alt=""
              className="lb-art"
              draggable="false"
              aria-hidden="true"
            />
          ) : null}


          {/* =====================================
              PODIUM LIVE DATA

              Rank:
              center = #1
              kiri   = #2
              kanan  = #3
          ====================================== */}

          <PodiumName
            team={
              leaderboard[0]
                .team
            }
            position={
              PODIUMS.first
            }
            active={
              activeRank === 0
            }
          />


          <PodiumName
            team={
              leaderboard[1]
                .team
            }
            position={
              PODIUMS.second
            }
            active={
              activeRank === 1
            }
          />


          <PodiumName
            team={
              leaderboard[2]
                .team
            }
            position={
              PODIUMS.third
            }
            active={
              activeRank === 2
            }
          />


          {/* =====================================
              LIVE LEADERBOARD ROWS
          ====================================== */}

          {leaderboard.map(
            (
              item,
              index
            ) => (
              <LeaderboardRow
                key={`
                  ${item.team}
                  -
                  ${index}
                `}
                item={item}
                index={index}
                selected={
                  selectedRank ===
                  index
                }
                onSelect={(
                  rank
                ) => {
                  setSelectedRank(
                    (
                      current
                    ) =>
                      current ===
                      rank
                        ? null
                        : rank
                  );
                }}
                onHover={
                  setHoveredRank
                }
              />
            )
          )}

        </div>
      </section>
    </>
  );
}