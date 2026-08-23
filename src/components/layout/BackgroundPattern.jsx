/*
 * Background pattern untuk seluruh aplikasi
 * FIGMA SOURCE: J1XqDOh4KLCNq2Ns9WjPyu | Node: 303:944
 */

const ASSETS = {
  patternTop:
    "https://www.figma.com/api/mcp/asset/6b385835-1e46-4e06-a30a-b3ae0d8156df.svg",
  patternBottom:
    "https://www.figma.com/api/mcp/asset/6aa5b922-82c0-40d6-9339-80fa50d7e8cd.svg",
};

export default function BackgroundPattern() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{
        background: "#685ABB",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      {/* Pattern Top */}
      <img
        style={{
          position: "absolute",
          left: "50%",
          top: "-206px",
          width: "calc(100vw + 286.339px)",
          height: "716.798px",
          maxWidth: "none",
          transform: "translateX(-50%)",
          objectFit: "fill",
          userSelect: "none",
          pointerEvents: "none",
        }}
        src={ASSETS.patternTop}
        alt=""
        draggable="false"
      />

      {/* Pattern Bottom */}
      <img
        style={{
          position: "absolute",
          left: "50%",
          top: "532.256px",
          width: "calc(100vw + 286.339px)",
          height: "716.798px",
          maxWidth: "none",
          transform: "translateX(-50%)",
          objectFit: "fill",
          userSelect: "none",
          pointerEvents: "none",
        }}
        src={ASSETS.patternBottom}
        alt=""
        draggable="false"
      />
    </div>
  );
}
