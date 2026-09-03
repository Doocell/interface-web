// src/pages/Timeline.jsx - FIGMA: 303:944
// Menggunakan SVG export langsung dari Figma

import Navbar from "../components/layout/Navbar";
import BackgroundPattern from "../components/layout/BackgroundPattern";
import "../styles/timeline-page.css";

const TIMELINE_ASSETS = {
  triangleDecor: "https://www.figma.com/api/mcp/asset/fb9f952c-a500-4540-972d-840631d0b7ee.svg",
  xDecor: "https://www.figma.com/api/mcp/asset/734ebfc2-3769-4e0f-b5ef-e4db21131732.svg",
  desktop: "/timeline/BAGIAN TIMELINE.svg",
  mobile: "/timeline/BAGIAN TIMELINE MOBILE.svg",
};

export default function Timeline() {
  return (
    <>
      <Navbar />
      <BackgroundPattern />
      <main className="timeline-page">
        <img src={TIMELINE_ASSETS.triangleDecor} alt="" className="timeline-decoration timeline-decoration--triangle" />
        <img src={TIMELINE_ASSETS.xDecor} alt="" className="timeline-decoration timeline-decoration--x" />

        {/* <div className="timeline-title-wrapper">
          <h1 className="timeline-title">TIMELINE KEGIATAN</h1>
          <div className="timeline-title-underline">
            <div className="underline-segment underline-pink"></div>
            <div className="underline-segment underline-purple"></div>
            <div className="underline-segment underline-blue"></div>
            <div className="underline-segment underline-yellow"></div>
          </div>
        </div> */}

        {/* Desktop Timeline SVG */}
        <div className="timeline-svg-container timeline-svg-container--desktop">
          <img 
            src={TIMELINE_ASSETS.desktop} 
            alt="Timeline Kegiatan INTERFACE 2026" 
            className="timeline-svg"
          />
        </div>

        {/* Mobile Timeline SVG */}
        <div className="timeline-svg-container timeline-svg-container--mobile">
          <img 
            src={TIMELINE_ASSETS.mobile} 
            alt="Timeline Kegiatan INTERFACE 2026" 
            className="timeline-svg"
          />
        </div>
      </main>
    </>
  );
}