import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import BackgroundPattern from "../components/layout/BackgroundPattern";

// Floating geometric shapes from leaderboard
import elemenX from "../assets/leaderboard/elemen-x.svg";
import elemenSegitiga from "../assets/leaderboard/elemen-segitiga.svg";
import elemenLingkaran from "../assets/leaderboard/elemen-lingkaran.svg";

// Vote card assets
import cardGoldBorder from "../assets/vote/card-gold-border.svg";
import cardClouds from "../assets/vote/card-clouds.svg";
import cardWings from "../assets/vote/card-wings.svg";
import cardShield from "../assets/vote/card-shield.svg";
import cardGamepad from "../assets/vote/card-gamepad.svg";
import cardNamePlate from "../assets/vote/card-name-plate.svg";
import cardCornerDot from "../assets/vote/card-corner-dot.svg";

// Warn / Robot after vote assets
import robotFace from "../assets/vote/robot-face.svg";
import robotHead from "../assets/vote/robot-head.svg";
import robotHat from "../assets/vote/robot-hat.svg";
import robotEarL from "../assets/vote/robot-ear-l.svg";
import robotEarR from "../assets/vote/robot-ear-r.svg";

export default function Vote() {
  const [session, setSession] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [kodeKelompok, setKodeKelompok] = useState(
    localStorage.getItem("kode_kelompok") || ""
  );

  useEffect(() => {
    // Check local storage for vote status
    const votedLocally = localStorage.getItem("interface_has_voted") === "true";
    if (votedLocally) {
      setHasVoted(true);
    }

    async function fetchActiveSession() {
      try {
        const { data: sessionData, error: sessionError } = await supabase
          .from("vote_sessions")
          .select("*")
          .eq("is_active", true)
          .limit(1)
          .maybeSingle();

        if (!sessionError && sessionData) {
          setSession(sessionData);

          const { data: optionsData } = await supabase
            .from("vote_options")
            .select("*, vote_records(count)")
            .eq("session_id", sessionData.id);

          if (optionsData && optionsData.length > 0) {
            setOptions(optionsData);
          }

          if (kodeKelompok) {
            const { data: existingVote } = await supabase
              .from("vote_records")
              .select("id")
              .eq("session_id", sessionData.id)
              .eq("kode_kelompok", kodeKelompok)
              .maybeSingle();

            if (existingVote) {
              setHasVoted(true);
              localStorage.setItem("interface_has_voted", "true");
            }
          }
        }
      } catch (err) {
        console.error("Error fetching vote session:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchActiveSession();
  }, [kodeKelompok]);

  // Demo fallback candidate groups matching Figma 1:1
  const defaultOptions = [
    { id: 1, nama_kandidat: "Kelompok 01", deskripsi: "Tim Alpha" },
    { id: 2, nama_kandidat: "Kelompok 02", deskripsi: "Tim Beta" },
    { id: 3, nama_kandidat: "Kelompok 03", deskripsi: "Tim Gamma" },
  ];

  const displayOptions = options.length > 0 ? options : defaultOptions;

  async function handleVoteSubmit() {
    if (!selectedOptionId) {
      alert("Silakan pilih kelompok yang ingin kamu vote terlebih dahulu!");
      return;
    }

    setSubmitting(true);

    if (session?.id) {
      try {
        const activeKode = kodeKelompok || "GUEST-" + Math.floor(1000 + Math.random() * 9000);
        const { error } = await supabase.from("vote_records").insert({
          session_id: session.id,
          option_id: selectedOptionId,
          kode_kelompok: activeKode,
        });

        if (error) {
          console.warn("Supabase record error:", error.message);
        }
      } catch (err) {
        console.error("Vote submission error:", err);
      }
    }

    // Mark as voted in UI & local storage
    localStorage.setItem("interface_has_voted", "true");
    setHasVoted(true);
    setSubmitting(false);
  }

  // Toggle for testing purpose
  function handleResetVote() {
    localStorage.removeItem("interface_has_voted");
    setHasVoted(false);
    setSelectedOptionId(null);
  }

  return (
    <main
      className="relative min-h-screen overflow-x-hidden text-white flex flex-col justify-between selection:bg-[#ff59fb] selection:text-white"
      style={{
        background: "#685ABB",
        paddingTop: "76px",
      }}
    >
      {/* ========================================================================= */}
      {/* FLOATING DECORATIVE FIGMA ELEMENTS (MATCHING FIGMA NODE 405:5627) */}
      {/* ========================================================================= */}

      {/* Silang / Cyan X (Top Left) */}
      <div
        className="pointer-events-none absolute left-2 sm:left-6 md:left-8 top-36 sm:top-48 md:top-52 z-0 opacity-85 md:opacity-100 float-anim-1"
        style={{
          width: "clamp(90px, 11vw, 142px)",
          height: "clamp(90px, 11vw, 142px)",
          filter: "drop-shadow(0 0 25px rgba(24, 156, 244, 0.45))",
          transform: "rotate(22.83deg)",
        }}
        aria-hidden="true"
      >
        <img src={elemenX} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Segitiga / Purple Triangle (Bottom Left) */}
      <div
        className="pointer-events-none absolute -left-8 sm:-left-4 md:left-2 top-[460px] sm:top-[520px] md:top-[555px] z-0 opacity-85 md:opacity-100 float-anim-2"
        style={{
          width: "clamp(150px, 18vw, 240px)",
          height: "clamp(150px, 18vw, 230px)",
          filter: "drop-shadow(0 0 25px rgba(255, 89, 251, 0.4))",
          transform: "rotate(20.22deg)",
        }}
        aria-hidden="true"
      >
        <img
          src={elemenSegitiga}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Lingkaran / Yellow Circle (Top Right) */}
      <div
        className="pointer-events-none absolute right-2 sm:right-6 md:right-10 top-20 sm:top-24 md:top-28 z-0 opacity-85 md:opacity-100 float-anim-3"
        style={{
          width: "clamp(100px, 12vw, 157px)",
          height: "clamp(100px, 12vw, 157px)",
          filter: "drop-shadow(0 0 25px rgba(255, 217, 0, 0.5))",
        }}
        aria-hidden="true"
      >
        <img
          src={elemenLingkaran}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Kotak / Pink Square (Bottom Right) */}
      <div
        className="pointer-events-none absolute right-2 sm:right-6 md:right-10 top-[580px] sm:top-[660px] md:top-[720px] z-0 opacity-85 md:opacity-100 float-anim-4"
        style={{
          width: "clamp(110px, 13vw, 170px)",
          height: "clamp(110px, 13vw, 170px)",
        }}
        aria-hidden="true"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="absolute rounded-[40px] sm:rounded-[59.4px] bg-[#ff59fb] shadow-[0_0_30px_#ff59fb]"
            style={{
              width: "85%",
              height: "85%",
              transform: "rotate(10.8deg)",
            }}
          />
          <div
            className="absolute rounded-[26px] sm:rounded-[38px] border-[6px] sm:border-[9.7px] border-white shadow-[0_0_15px_white]"
            style={{
              width: "70%",
              height: "70%",
              transform: "rotate(10.8deg)",
            }}
          />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MAIN CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10 flex-1 flex flex-col justify-center">
        {/* ========================================== */}
        {/* TITLE: VOTE TIM */}
        {/* ========================================== */}
        <header className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1
            className="inline-flex items-baseline justify-center font-['Tektur',sans-serif] font-black uppercase tracking-tight select-none"
            style={{
              lineHeight: 0.85,
              textShadow:
                "9.298px 8.058px 0px #ac4afd, 0px 0px 9.292px rgba(255,255,255,0.9)",
            }}
          >
            {/* VOTE */}
            <span className="flex items-baseline mr-4 sm:mr-6 md:mr-8">
              <span
                className="text-[#FFD900]"
                style={{ fontSize: "clamp(56px, 8vw, 114px)" }}
              >
                V
              </span>
              <span
                className="text-white"
                style={{ fontSize: "clamp(50px, 7.2vw, 102.6px)" }}
              >
                OTE
              </span>
            </span>

            {/* TIM */}
            <span className="flex items-baseline">
              <span
                className="text-[#FFD900]"
                style={{ fontSize: "clamp(56px, 8vw, 114px)" }}
              >
                T
              </span>
              <span
                className="text-white"
                style={{ fontSize: "clamp(50px, 7.2vw, 102.6px)" }}
              >
                IM
              </span>
            </span>
          </h1>
        </header>

        {/* ========================================== */}
        {/* MAIN VOTE PANEL */}
        {/* ========================================== */}
        <section
          className="relative z-20 w-full max-w-[1091px] min-h-[500px] sm:min-h-[540px] md:min-h-[568px] mx-auto rounded-[16.6px] p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center shadow-[0px_0px_29.578px_0px_#9513ff]"
          style={{
            background: "rgba(41, 54, 62, 0.65)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "5.324px solid #9513FF",
          }}
          aria-label="Panel Pemilihan Suara"
        >
          {loading ? (
            <div className="py-20 text-center flex flex-col items-center justify-center">
              <div className="w-10 h-10 border-4 border-[#FF59FB] border-t-transparent rounded-full animate-spin mb-4" />
              <p className="font-['Tektur',sans-serif] text-white/80 text-lg">
                Memuat data sesi vote...
              </p>
            </div>
          ) : !hasVoted ? (
            /* ------------------------------------------------------------- */
            /* BEFORE STATE: VOTE CARD SELECTION & VOTE BUTTON (NODE 405:5627) */
            /* ------------------------------------------------------------- */
            <div className="w-full flex flex-col items-center justify-between gap-8 md:gap-10">
              {/* Cards Grid / Container */}
              <div
                className="w-full flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12"
                role="radiogroup"
                aria-label="Pilih Kelompok"
              >
                {displayOptions.map((opt) => {
                  const isSelected = selectedOptionId === opt.id;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedOptionId(opt.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedOptionId(opt.id);
                        }
                      }}
                      tabIndex={0}
                      role="radio"
                      aria-checked={isSelected}
                      className={`cursor-pointer relative w-[220px] sm:w-[240px] md:w-[258.7px] h-[280px] sm:h-[305px] md:h-[326.9px] rounded-[12.9px] transition-all duration-300 transform select-none ${
                        isSelected
                          ? "scale-105 shadow-[0_0_30px_#FFD900] ring-4 ring-[#FFD900]"
                          : "hover:scale-102 hover:shadow-[0_0_20px_rgba(255,89,251,0.5)]"
                      }`}
                      style={{
                        background: "#6658ba",
                        border: "1.536px solid rgba(255, 255, 255, 0.3)",
                        boxShadow: "inset 6.145px 6.145px 6.145px 0px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {/* Gold Inner Border Graphic */}
                      <div className="absolute inset-[10px] sm:inset-[12px] md:inset-[13px] pointer-events-none">
                        <img
                          src={cardGoldBorder}
                          alt=""
                          className="w-full h-full object-fill block"
                        />
                      </div>

                      {/* Top Corner Gold Dots */}
                      <div className="absolute top-[12px] sm:top-[14px] md:top-[15.7px] left-[10px] sm:left-[12px] md:left-[13.4px] w-[6px] sm:w-[7.5px] h-[6px] sm:h-[7.5px] pointer-events-none">
                        <img src={cardCornerDot} alt="" className="w-full h-full" />
                      </div>
                      <div className="absolute top-[12px] sm:top-[14px] md:top-[15.7px] right-[10px] sm:right-[12px] md:right-[13.4px] w-[6px] sm:w-[7.5px] h-[6px] sm:h-[7.5px] pointer-events-none">
                        <img src={cardCornerDot} alt="" className="w-full h-full" />
                      </div>

                      {/* Emblem: Wings + Shield + Gamepad */}
                      <div className="absolute top-[35px] sm:top-[42px] md:top-[49px] left-1/2 -translate-x-1/2 w-[170px] sm:w-[190px] md:w-[202.3px] h-[140px] sm:h-[155px] md:h-[169.2px] flex items-center justify-center pointer-events-none">
                        {/* Wings Background */}
                        <img
                          src={cardWings}
                          alt=""
                          className="absolute inset-0 w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]"
                        />

                        {/* Gold Badge Shield */}
                        <div className="relative w-[76px] sm:w-[86px] md:w-[94.5px] h-[94px] sm:h-[106px] md:h-[118px] flex items-center justify-center mt-[-8px]">
                          <img
                            src={cardShield}
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain"
                          />

                          {/* White Gamepad Icon */}
                          <div className="relative z-10 w-[45px] sm:w-[54px] md:w-[62px] h-[45px] sm:h-[54px] md:h-[63px] flex items-center justify-center">
                            <img
                              src={cardGamepad}
                              alt=""
                              className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Clouds Overlay at Card Bottom - BEHIND name plate */}
                      <div className="absolute bottom-0 left-0 w-full h-[65px] sm:h-[75px] md:h-[82px] overflow-hidden rounded-b-[12.9px] pointer-events-none z-5">
                        <img
                          src={cardClouds}
                          alt=""
                          className="w-full h-full object-cover object-bottom"
                        />
                      </div>

                      {/* Name Plate at Bottom - ABOVE clouds */}
                      <div className="absolute bottom-[38px] sm:bottom-[44px] md:bottom-[48px] left-1/2 -translate-x-1/2 w-[180px] sm:w-[195px] md:w-[209.9px] h-[30px] sm:h-[33px] md:h-[36px] flex items-center justify-center z-10">
                        <img
                          src={cardNamePlate}
                          alt=""
                          className="absolute inset-0 w-full h-full object-fill pointer-events-none z-1"
                        />
                        <span
                          className="relative z-10 font-['Russo_One',sans-serif] text-white text-center leading-tight px-6 whitespace-nowrap"
                          style={{
                            fontSize: "clamp(12px, 1.4vw, 19.5px)",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
                          }}
                        >
                          {opt.nama_kandidat}
                        </span>
                      </div>

                      {/* Selected Indicator Checkmark Badge */}
                      {isSelected && (
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#FFD900] text-black font-black flex items-center justify-center shadow-[0_0_15px_#FFD900] z-30 animate-bounce">
                          ✓
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Vote Button (Figma Node 522:13850) */}
              <div className="w-full flex flex-col items-center justify-center pt-2">
                <button
                  onClick={handleVoteSubmit}
                  disabled={submitting}
                  className="relative w-full max-w-[336px] h-[52px] sm:h-[56px] md:h-[60.9px] rounded-[10.1px] bg-[#ffd900] flex items-center justify-center transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none"
                  style={{
                    boxShadow:
                      "inset -4.039px -4.039px 4.039px 0px rgba(0,0,0,0.25), inset 5.049px 4.039px 3.433px 0px #fceb8a, 0px 8px 25px rgba(255,217,0,0.45)",
                  }}
                >
                  <span
                    className="font-['Tektur',sans-serif] font-black uppercase text-white tracking-wider"
                    style={{
                      fontSize: "clamp(22px, 2.6vw, 30.2px)",
                      lineHeight: "39.5px",
                      textShadow:
                        "0px 5.986px 3.442px rgba(0,0,0,0.31), 0px 4.49px 0px #ac4afd",
                    }}
                  >
                    {submitting ? "VOTING..." : "VOTE"}
                  </span>
                </button>

                <p className="mt-3 text-xs sm:text-sm font-['Tektur',sans-serif] text-white/60 text-center">
                  *Klik salah satu kartu kelompok di atas lalu tekan tombol Vote
                </p>
              </div>
            </div>
          ) : (
            /* ------------------------------------------------------------- */
            /* AFTER STATE: WARN MESSAGE ROBOT (FIGMA NODE 522:14258) */
            /* ------------------------------------------------------------- */
            <div className="w-full flex flex-col items-center justify-center py-12 md:py-16 text-center animate-fade-in">
              {/* Cute Robot Head Illustration from Figma */}
              <div
                className="relative w-[130px] sm:w-[150px] md:w-[170px] h-[110px] sm:h-[125px] md:h-[140px] mb-6 sm:mb-8 flex items-center justify-center"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(107, 13, 53, 0.4))",
                }}
              >
                {/* Robot Ears */}
                <div className="absolute left-[-6px] top-[40%] w-[25px] h-[35px] pointer-events-none opacity-60">
                  <img src={robotEarL} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="absolute right-[-6px] top-[40%] w-[25px] h-[35px] pointer-events-none opacity-60">
                  <img src={robotEarR} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Robot Head Body */}
                <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
                  <img src={robotHead} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Robot Hat Inside */}
                <div className="absolute inset-[15%] w-[70%] h-[70%] pointer-events-none opacity-60">
                  <img src={robotHat} alt="" className="w-full h-full object-contain" />
                </div>

                {/* Robot Face & Screen */}
                <div className="relative z-10 w-[70px] sm:w-[85px] h-[45px] sm:h-[55px] flex items-center justify-center opacity-70">
                  <img src={robotFace} alt="" className="absolute inset-0 w-full h-full object-contain" />
                  <span className="relative z-10 font-['Tektur',sans-serif] font-bold text-[#6b0d35] text-xl sm:text-2xl select-none">
                    o_O
                  </span>
                </div>
              </div>

              {/* Warning Text: "Lau udah ngevote mpruy" */}
              <h2
                className="font-['Tektur',sans-serif] font-bold text-white uppercase text-center tracking-wide mb-6"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 39.4px)",
                  opacity: 0.6,
                  textShadow: "0px 0px 15px rgba(255,255,255,0.4)",
                }}
              >
                Lau udah ngevote mpruy
              </h2>

              {/* Button to test/re-vote */}
              <button
                onClick={handleResetVote}
                className="mt-4 px-6 py-2 rounded-full border border-white/30 font-['Tektur',sans-serif] text-xs sm:text-sm text-white/70 hover:text-white hover:border-white transition-all cursor-pointer"
              >
                ↻ Vote Ulang (Reset Demo)
              </button>
            </div>
          )}
        </section>

        {/* ========================================== */}
        {/* FOOTER */}
        {/* ========================================== */}
        <footer className="mt-16 sm:mt-20 md:mt-24 pb-6 text-center">
          <p className="font-['Tektur',sans-serif] font-semibold text-white/70 uppercase tracking-widest text-xs sm:text-sm">
            COPYRIGHT @2026. INTERFACE PROJECT
          </p>
        </footer>
      </div>

      {/* ========================================================================= */}
      {/* AMBIENT ANIMATIONS & UTILITIES */}
      {/* ========================================================================= */}
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px) rotate(22.8deg); }
          50% { transform: translate(8px, -14px) rotate(26deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px) rotate(20.2deg); }
          50% { transform: translate(-10px, 12px) rotate(16deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(6px, -10px) scale(1.05); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0px, 0px) rotate(10.8deg); }
          50% { transform: translate(-8px, -12px) rotate(15deg); }
        }

        .float-anim-1 { animation: float1 8s ease-in-out infinite; }
        .float-anim-2 { animation: float2 9s ease-in-out infinite; }
        .float-anim-3 { animation: float3 7s ease-in-out infinite; }
        .float-anim-4 { animation: float4 8.5s ease-in-out infinite; }

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