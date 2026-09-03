import HeroSection from "../components/sections/HeroSection";
import SponsorSection from "../components/sections/SponsorSection.jsx"
import Timeline from "../pages/Timeline.jsx"
import GuidebookSection from "../components/sections/GuidebookSection.jsx"
import Leaderboard from "../pages/Leaderboard.jsx"
import InterfaceInfo from  "../pages/InterfaceInfo.jsx"
import FooterSection from "../components/sections/FooterSection.jsx"


// import TimelineSection from "../components/sections/TimelineSection";


export default function Home() {
  return (
    <main className="home-page" 
      style={{ 
        paddingTop: "76px", 
        // display: "flex", 
        flexDirection: "column", 
        gap: "5px" 
      }}>

      {/* =========================================
          SECTION AWAL
          FIGMA 303:2
      ========================================== */}

      <HeroSection />
      <Timeline/>
      <SponsorSection/>

      <GuidebookSection/>
      <Leaderboard/>
      <InterfaceInfo/>
      <FooterSection/>

      {/* =========================================
          TIMELINE DI LANDING PAGE
          FIGMA 303:944
      ========================================== */}
{/* 
      <TimelineSection /> */}

    </main>
  );
}