import BackgroundPattern from "../components/layout/BackgroundPattern";
import TimelineSection from "../components/sections/TimelineSection";


export default function Timeline() {
  return (
    <>
      <BackgroundPattern />
      <main className="timeline-route-page" style={{ paddingTop: "76px" }}>
        <TimelineSection />
      </main>
    </>
  );
}