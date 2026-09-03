import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

// Figma Assets
import crown1 from "../assets/leaderboard/crown-1.svg";
import crown2 from "../assets/leaderboard/crown-2.svg";
import crown3 from "../assets/leaderboard/crown-3.svg";
import ribbon1 from "../assets/leaderboard/ribbon-1.svg";
import ribbon2 from "../assets/leaderboard/ribbon-2.svg";
import ribbon3 from "../assets/leaderboard/ribbon-3.svg";
import podium1Base from "../assets/leaderboard/podium-1-base.svg";
import podium2Base from "../assets/leaderboard/podium-2-base.svg";
import podium3Base from "../assets/leaderboard/podium-3-base.svg";
import rowRank1 from "../assets/leaderboard/row-rank-1.svg";
import rowRank2 from "../assets/leaderboard/row-rank-2.svg";
import rowRank3 from "../assets/leaderboard/row-rank-3.svg";
import rowRankOther from "../assets/leaderboard/row-rank-other.svg";
import sistemPenilaianTitle from "../assets/leaderboard/sistem-penilaian-title.svg";
import elemenSegitiga from "../assets/leaderboard/elemen-segitiga.svg";
import elemenX from "../assets/leaderboard/elemen-x.svg";
import elemenLingkaran from "../assets/leaderboard/elemen-lingkaran.svg";

export default function Leaderboard() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGroups() {
      try {
        const { data, error } = await supabase
          .from("groups")
          .select("*")
          .order("poin", { ascending: false })
          .limit(30);

        if (!error && data && data.length > 0) {
          setGroups(data);
        }
      } catch (err) {
        console.error("Error fetching leaderboard groups:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGroups();
  }, []);

  // Realistic fallback demo data matching Figma design
  const defaultDummyData = [
    { id: 1, nama_kelompok: "TEAM NAME", poin: 98 },
    { id: 2, nama_kelompok: "TEAM NAME", poin: 96 },
    { id: 3, nama_kelompok: "TEAM NAME", poin: 85 },
    { id: 4, nama_kelompok: "TEAM NAME", poin: 75 },
    { id: 5, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 6, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 7, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 8, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 9, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 10, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 11, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 12, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 13, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 14, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 15, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 16, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 17, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 18, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 19, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 20, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 21, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 22, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 23, nama_kelompok: "TEAM NAME", poin: 65 },
    { id: 24, nama_kelompok: "TEAM NAME", poin: 65 },
  ];

  const displayGroups = groups.length > 0 ? groups : defaultDummyData;

  const top1 = displayGroups[0] || { nama_kelompok: "TEAM NAME", poin: 98 };
  const top2 = displayGroups[1] || { nama_kelompok: "TEAM NAME", poin: 96 };
  const top3 = displayGroups[2] || { nama_kelompok: "TEAM NAME", poin: 85 };

  return (
    <main
      className="relative min-h-screen overflow-x-hidden text-white selection:bg-[#ff59fb] selection:text-white"
      style={{
        background: "transparent",
        paddingTop: "76px",
      }}
    >
      {/* ========================================================================= */}
      {/* FLOATING DECORATIVE FIGMA ELEMENTS WITH SUBTLE AMBIENT ANIMATIONS */}
      {/* ========================================================================= */}

      {/* Elemen Segitiga (Top Left Floating Neon Triangle) */}
      <div
        className="pointer-events-none absolute -left-12 sm:left-4 md:left-12 lg:left-24 top-44 sm:top-56 md:top-64 z-0 opacity-80 md:opacity-100 float-anim-1"
        style={{
          width: "clamp(160px, 22vw, 335px)",
          height: "clamp(160px, 22vw, 335px)",
          filter: "drop-shadow(0 0 25px rgba(255, 89, 251, 0.4))",
        }}
        aria-hidden="true"
      >
        <img
          src={elemenSegitiga}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Elemen X (Top Right Floating Neon X) */}
      <div
        className="pointer-events-none absolute -right-16 sm:-right-8 md:right-4 lg:right-16 top-96 sm:top-[480px] md:top-[560px] z-0 opacity-80 md:opacity-100 float-anim-2"
        style={{
          width: "clamp(180px, 26vw, 404px)",
          height: "clamp(180px, 26vw, 404px)",
          filter: "drop-shadow(0 0 30px rgba(24, 156, 244, 0.45))",
        }}
        aria-hidden="true"
      >
        <img src={elemenX} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Elemen Lingkaran (Middle Left Floating Neon Yellow Circle) */}
      <div
        className="pointer-events-none absolute -left-14 sm:-left-8 md:left-0 top-[1180px] sm:top-[1280px] md:top-[1337px] z-0 opacity-80 md:opacity-100 float-anim-3"
        style={{
          width: "clamp(120px, 15vw, 217px)",
          height: "clamp(120px, 15vw, 220px)",
          filter: "drop-shadow(0 0 25px rgba(255, 217, 0, 0.45))",
        }}
        aria-hidden="true"
      >
        <img
          src={elemenLingkaran}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Elemen Kotak (Bottom Right Floating Neon Pink Square) */}
      <div
        className="pointer-events-none absolute -right-12 sm:-right-4 md:right-8 lg:right-20 top-[1680px] sm:top-[1780px] md:top-[1847px] z-0 opacity-80 md:opacity-100 float-anim-4"
        style={{
          width: "clamp(140px, 18vw, 270px)",
          height: "clamp(140px, 18vw, 270px)",
        }}
        aria-hidden="true"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="absolute rounded-[24px] sm:rounded-[31.5px] bg-[#ff59fb] shadow-[0_0_35px_#ff59fb]"
            style={{
              width: "75%",
              height: "75%",
              transform: "rotate(64.35deg)",
            }}
          />
          <div
            className="absolute rounded-[14px] sm:rounded-[18.4px] border-[8px] sm:border-[13.4px] border-white shadow-[0_0_20px_white]"
            style={{
              width: "61%",
              height: "61%",
              transform: "rotate(64.35deg)",
            }}
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTENT AREA */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-14">
        {/* ========================================== */}
        {/* 1. TITLE: SCORE LEADERBOARD */}
        {/* ========================================== */}
        <header className="text-center mb-10 md:mb-14">
          <h1
            className="inline-flex flex-col items-center justify-center font-['Tektur',sans-serif] font-black uppercase tracking-tight select-none"
            style={{
              lineHeight: 0.8,
              textShadow:
                "9.298px 8.058px 0px #ac4afd, 0px 0px 9.292px rgba(255,255,255,0.9)",
            }}
          >
            {/* Line 1: SCORE */}
            <span className="flex items-baseline justify-center">
              <span
                className="text-[#FFD900]"
                style={{
                  fontSize: "clamp(64px, 8.5vw, 114px)",
                }}
              >
                S
              </span>
              <span
                className="text-white"
                style={{
                  fontSize: "clamp(56px, 7.6vw, 102.6px)",
                }}
              >
                CORE
              </span>
            </span>

            {/* Line 2: LEADERBOARD */}
            <span className="flex items-baseline justify-center -mt-2 sm:-mt-3 md:-mt-4">
              <span
                className="text-[#FFD900]"
                style={{
                  fontSize: "clamp(64px, 8.5vw, 114px)",
                }}
              >
                L
              </span>
              <span
                className="text-white"
                style={{
                  fontSize: "clamp(56px, 7.6vw, 102.6px)",
                }}
              >
                EADERBOARD
              </span>
            </span>
          </h1>
        </header>

        {/* ========================================== */}
        {/* 2. TOP 3 PODIUM (RANKING) */}
        {/* ========================================== */}
        <section
          className="relative mx-auto flex items-end justify-center gap-3 sm:gap-6 md:gap-8 z-10"
          style={{
            maxWidth: "680px",
            marginBottom: "-25px",
          }}
          aria-label="Podium Juara 1, 2, dan 3"
        >
          {/* ----------------- RANK 2 (PINK / SILVER) ----------------- */}
          <div className="flex flex-col items-center flex-1 max-w-[198px] z-10">
            {/* Crown 2 */}
            <div className="w-[52px] sm:w-[62px] md:w-[68px] h-[42px] sm:h-[48px] md:h-[54px] mb-2 filter drop-shadow-[0_0_12px_rgba(213,87,210,0.6)]">
              <img
                src={crown2}
                alt="Crown Rank 2"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Team Name Ribbon */}
            <div
              className="relative w-full max-w-[191px] h-[44px] sm:h-[48px] md:h-[53px] flex items-center justify-center mb-2.5"
              style={{ transform: "rotate(2.22deg)" }}
            >
              <img
                src={ribbon2}
                alt=""
                className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-[0_0_12px_rgba(255,89,251,0.7)]"
              />
              <span
                className="relative z-10 font-['Tektur',sans-serif] font-bold text-white uppercase truncate px-3"
                style={{
                  fontSize: "clamp(12px, 1.4vw, 18.9px)",
                  textShadow: "0px 0px 8px #ff59fb, 1px 1px 2px rgba(0,0,0,0.5)",
                }}
                title={top2.nama_kelompok}
              >
                {top2.nama_kelompok}
              </span>
            </div>

            {/* Podium Block 2 */}
            <div
              className="relative w-full h-[190px] sm:h-[215px] md:h-[238px] bg-[#FF59FB] rounded-t-[22px] sm:rounded-t-[26px] md:rounded-t-[30.866px] overflow-hidden flex flex-col justify-between items-center shadow-[0_0_25px_rgba(255,89,251,0.45)]"
            >
              {/* Rank Number 2 */}
              <div
                className="font-['Tektur',sans-serif] font-bold text-white text-center leading-none mt-4 sm:mt-5 md:mt-7 select-none"
                style={{
                  fontSize: "clamp(85px, 10vw, 145px)",
                  textShadow: "0px 0px 15.433px #d557d2",
                }}
              >
                2
              </div>

              {/* Bottom Gradient Vector */}
              <div className="w-full h-[75px] sm:h-[90px] md:h-[105px] -mt-auto">
                <img
                  src={podium2Base}
                  alt=""
                  className="w-full h-full object-fill block"
                />
              </div>
            </div>
          </div>

          {/* ----------------- RANK 1 (YELLOW / GOLD - TALLEST) ----------------- */}
          <div className="flex flex-col items-center flex-1 max-w-[198px] z-20">
            {/* Crown 1 */}
            <div className="w-[52px] sm:w-[62px] md:w-[68px] h-[42px] sm:h-[48px] md:h-[54px] mb-2 filter drop-shadow-[0_0_16px_rgba(255,217,0,0.8)]">
              <img
                src={crown1}
                alt="Crown Rank 1"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Team Name Ribbon */}
            <div
              className="relative w-full max-w-[191px] h-[44px] sm:h-[48px] md:h-[53px] flex items-center justify-center mb-2.5"
              style={{ transform: "rotate(2.22deg)" }}
            >
              <img
                src={ribbon1}
                alt=""
                className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-[0_0_14px_rgba(255,217,0,0.9)]"
              />
              <span
                className="relative z-10 font-['Tektur',sans-serif] font-bold text-[#FFF3AD] uppercase truncate px-3"
                style={{
                  fontSize: "clamp(12px, 1.4vw, 18.9px)",
                  textShadow: "0px 0px 8px #ffd900, 1px 1px 2px rgba(0,0,0,0.4)",
                }}
                title={top1.nama_kelompok}
              >
                {top1.nama_kelompok}
              </span>
            </div>

            {/* Podium Block 1 */}
            <div
              className="relative w-full h-[240px] sm:h-[275px] md:h-[308.7px] bg-[#FFD900] rounded-t-[22px] sm:rounded-t-[26px] md:rounded-t-[30.866px] overflow-hidden flex flex-col justify-between items-center shadow-[0_0_35px_rgba(255,217,0,0.55)]"
            >
              {/* Rank Number 1 */}
              <div
                className="font-['Tektur',sans-serif] font-bold text-white text-center leading-none mt-6 sm:mt-8 md:mt-11 select-none"
                style={{
                  fontSize: "clamp(85px, 10vw, 145px)",
                  textShadow: "0px 0px 15.433px #f4bf32",
                }}
              >
                1
              </div>

              {/* Bottom Gradient Vector */}
              <div className="w-full h-[100px] sm:h-[125px] md:h-[145px] -mt-auto">
                <img
                  src={podium1Base}
                  alt=""
                  className="w-full h-full object-fill block"
                />
              </div>
            </div>
          </div>

          {/* ----------------- RANK 3 (CYAN / BRONZE) ----------------- */}
          <div className="flex flex-col items-center flex-1 max-w-[198px] z-10">
            {/* Crown 3 */}
            <div className="w-[52px] sm:w-[62px] md:w-[68px] h-[42px] sm:h-[48px] md:h-[54px] mb-2 filter drop-shadow-[0_0_12px_rgba(24,156,244,0.6)]">
              <img
                src={crown3}
                alt="Crown Rank 3"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Team Name Ribbon */}
            <div
              className="relative w-full max-w-[191px] h-[44px] sm:h-[48px] md:h-[53px] flex items-center justify-center mb-2.5"
              style={{ transform: "rotate(2.22deg)" }}
            >
              <img
                src={ribbon3}
                alt=""
                className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-[0_0_12px_rgba(24,156,244,0.7)]"
              />
              <span
                className="relative z-10 font-['Tektur',sans-serif] font-bold text-white uppercase truncate px-3"
                style={{
                  fontSize: "clamp(12px, 1.4vw, 18.9px)",
                  textShadow: "0px 0px 8px #199bf3, 1px 1px 2px rgba(0,0,0,0.5)",
                }}
                title={top3.nama_kelompok}
              >
                {top3.nama_kelompok}
              </span>
            </div>

            {/* Podium Block 3 */}
            <div
              className="relative w-full h-[170px] sm:h-[190px] md:h-[210px] bg-[#189CF4] rounded-t-[22px] sm:rounded-t-[26px] md:rounded-t-[30.866px] overflow-hidden flex flex-col justify-between items-center shadow-[0_0_25px_rgba(24,156,244,0.45)]"
            >
              {/* Rank Number 3 */}
              <div
                className="font-['Tektur',sans-serif] font-bold text-white text-center leading-none mt-4 sm:mt-5 md:mt-7 select-none"
                style={{
                  fontSize: "clamp(85px, 10vw, 145px)",
                  textShadow: "0px 0px 15.433px #147fc7",
                }}
              >
                3
              </div>

              {/* Bottom Gradient Vector */}
              <div className="w-full h-[100px] sm:h-[125px] md:h-[145px] -mt-auto">
                <img
                  src={podium3Base}
                  alt=""
                  className="w-full h-full object-fill block"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. LEADERBOARD TABLE (TOP RANK TEAM) */}
        {/* ========================================== */}
        <section
          className="relative z-20 w-full max-w-[1303px] mx-auto rounded-[16.6px] overflow-hidden shadow-[0px_0px_29.578px_0px_#9513ff]"
          style={{
            background: "rgba(41, 54, 62, 0.72)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "5.324px solid #9513FF",
          }}
        >
          {/* Table Header */}
          <div
            className="flex items-center justify-between px-4 sm:px-8 md:px-14 py-4 md:py-5 border-b border-white/10 font-['Tektur',sans-serif] font-semibold text-white tracking-wide"
            style={{ fontSize: "clamp(16px, 1.8vw, 24.7px)" }}
          >
            <div className="flex items-center gap-6 sm:gap-10 md:gap-14 flex-1">
              <span className="w-14 sm:w-20 md:w-24 text-center">Rank</span>
              <span>Nama Kelompok</span>
            </div>
            <span className="text-right pr-2 sm:pr-4">Total Skor</span>
          </div>

          {/* Table Scrollable Body */}
          <div
            className="overflow-y-auto px-3 sm:px-6 md:px-10 py-4 custom-scrollbar"
            style={{
              maxHeight: "440px",
            }}
          >
            {loading ? (
              <div className="py-20 text-center">
                <div className="inline-block w-8 h-8 border-4 border-[#FF59FB] border-t-transparent rounded-full animate-spin mb-4" />
                <p className="font-['Tektur',sans-serif] text-white/70 text-lg">
                  Memuat data leaderboard...
                </p>
              </div>
            ) : displayGroups.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-['Tektur',sans-serif] text-white/70 text-lg">
                  Belum ada data kelompok.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {displayGroups.map((group, index) => {
                  const rank = index + 1;

                  // Styling tokens per rank category
                  let rowBorderSvg = rowRankOther;
                  let rankShadow = "none";
                  let rankColor = "#ffffff";
                  let nameColor = "#ffffff";
                  let nameShadow = "none";
                  let scoreColor = "#D00000";

                  if (rank === 1) {
                    rowBorderSvg = rowRank1;
                    rankShadow = "0px 0px 6.175px #f4bf32";
                    nameColor = "#FFF3AD";
                    nameShadow = "0px 0px 5.916px #ffd900";
                    scoreColor = "#20EA48"; // Bright green
                  } else if (rank === 2) {
                    rowBorderSvg = rowRank2;
                    rankShadow = "0px 0px 6.175px #d557d2";
                    nameColor = "#FFFFFF";
                    nameShadow = "0px 0px 5.916px #ff59fb";
                    scoreColor = "#3DEA20"; // Neon green
                  } else if (rank === 3) {
                    rowBorderSvg = rowRank3;
                    rankShadow = "0px 0px 6.175px #147fc7";
                    nameColor = "#FFFFFF";
                    nameShadow = "0px 0px 5.916px #189cf4";
                    scoreColor = "#189CF4"; // Cyan
                  } else if (rank === 4) {
                    rowBorderSvg = rowRankOther;
                    scoreColor = "#F4BF32"; // Gold/Yellow
                  }

                  return (
                    <div
                      key={group.id || index}
                      className="relative w-full h-[62px] sm:h-[66.7px] flex items-center justify-between px-4 sm:px-6 md:px-10 rounded-xl transition-transform duration-200 hover:scale-[1.008]"
                    >
                      {/* Exact SVG Neon Frame from Figma */}
                      <img
                        src={rowBorderSvg}
                        alt=""
                        className="absolute inset-0 w-full h-full pointer-events-none object-fill"
                      />

                      {/* Rank & Team Name */}
                      <div className="relative z-10 flex items-center gap-6 sm:gap-10 md:gap-14 flex-1 min-w-0">
                        {/* Rank Number */}
                        <span
                          className="w-14 sm:w-20 md:w-24 text-center font-['Tektur',sans-serif] font-bold leading-none select-none shrink-0"
                          style={{
                            fontSize: "clamp(26px, 3.2vw, 44.5px)",
                            color: rankColor,
                            textShadow: rankShadow,
                          }}
                        >
                          {rank}
                        </span>

                        {/* Team Name */}
                        <span
                          className="font-['Tektur',sans-serif] font-semibold truncate tracking-wide pr-2"
                          style={{
                            fontSize: "clamp(15px, 1.8vw, 24.7px)",
                            color: nameColor,
                            textShadow: nameShadow,
                          }}
                          title={group.nama_kelompok}
                        >
                          {group.nama_kelompok}
                        </span>
                      </div>

                      {/* Score */}
                      <span
                        className="relative z-10 font-['Tektur',sans-serif] font-semibold text-right shrink-0 pl-2 pr-1 sm:pr-3"
                        style={{
                          fontSize: "clamp(16px, 1.8vw, 24.7px)",
                          color: scoreColor,
                        }}
                      >
                        {group.poin}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. SISTEM PENILAIAN */}
        {/* ========================================== */}
        <section className="relative z-20 w-full max-w-[1338px] mx-auto mt-24 md:mt-32">
          <div className="relative w-full">
            {/* Header Badge/Ribbon */}
            <div className="flex justify-center -mb-[38px] sm:-mb-[45px] md:-mb-[52px] relative z-30">
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: "clamp(260px, 36vw, 468px)",
                  height: "clamp(65px, 8.5vw, 106px)",
                }}
              >
                {/* SVG Ribbon Background */}
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{ transform: "rotate(-1.02deg)" }}
                >
                  <img
                    src={sistemPenilaianTitle}
                    alt=""
                    className="w-full h-full object-fill pointer-events-none drop-shadow-[0_0_20px_rgba(255,89,251,0.6)]"
                  />
                </div>

                {/* Ribbon Text */}
                <h2
                  className="relative z-10 font-['Londrina_Solid',sans-serif] font-black uppercase text-center text-[#ff3df9] tracking-wider whitespace-nowrap"
                  style={{
                    fontSize: "clamp(24px, 3.4vw, 45.4px)",
                    lineHeight: 1,
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.35)",
                    transform: "rotate(-1.02deg)",
                  }}
                >
                  SISTEM PENILAIAN
                </h2>
              </div>
            </div>

            {/* Assessment Card Box */}
            <div
              className="relative w-full rounded-[24px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden p-6 sm:p-10 md:p-14 pt-16 sm:pt-20 md:pt-24"
              style={{
                background: "rgba(41, 54, 62, 0.75)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "6px solid #FF59FB",
                boxShadow:
                  "0 0 35px rgba(255, 89, 251, 0.4), inset 0 0 25px rgba(255, 89, 251, 0.15)",
              }}
            >
              <p
                className="font-['Londrina_Solid',sans-serif] font-light text-white text-center leading-relaxed max-w-[1170px] mx-auto tracking-wide"
                style={{
                  fontSize: "clamp(18px, 2.3vw, 32px)",
                  opacity: 0.96,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ========================================================================= */}
      {/* COMPONENT STYLES (CUSTOM SCROLLBAR & FLOATING ANIMATIONS) */}
      {/* ========================================================================= */}
      <style>{`
        /* Custom Table Scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #303a42;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #6b8394;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9513ff;
          box-shadow: 0 0 8px #9513ff;
        }

        /* Ambient floating animations */
        @keyframes ambientFloat1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(12px, -18px) rotate(4deg); }
        }
        @keyframes ambientFloat2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-14px, 16px) rotate(-3deg); }
        }
        @keyframes ambientFloat3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(8px, -12px) scale(1.05); }
        }
        @keyframes ambientFloat4 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-10px, -15px) rotate(6deg); }
        }

        .float-anim-1 { animation: ambientFloat1 8s ease-in-out infinite; }
        .float-anim-2 { animation: ambientFloat2 10s ease-in-out infinite; }
        .float-anim-3 { animation: ambientFloat3 7s ease-in-out infinite; }
        .float-anim-4 { animation: ambientFloat4 9s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .float-anim-1,
          .float-anim-2,
          .float-anim-3,
          .float-anim-4 {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}
