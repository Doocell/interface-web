import BackgroundPattern from "../components/layout/BackgroundPattern";
import GuidebookSection from "../components/sections/GuidebookSection";

export default function BukuPanduan() {
  return (
    <>
      <BackgroundPattern />
      <main className="buku-panduan-page" style={{ paddingTop: "76px" }}>
        <GuidebookSection />
      </main>
    </>
  );
}