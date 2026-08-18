import HeroSection from "../components/sections/HeroSection";
import TimelineSection from "../components/sections/TimelineSection";


export default function Home() {
  return (
    <main className="home-page" style={{ paddingTop: "76px" }}>

      {/* =========================================
          SECTION AWAL
          FIGMA 303:2
      ========================================== */}

      <HeroSection />


      {/* =========================================
          TIMELINE DI LANDING PAGE
          FIGMA 303:944
      ========================================== */}

      <TimelineSection />

    </main>
  );
}