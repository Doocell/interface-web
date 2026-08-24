import "../styles/map-page.css";

const PANEL_WIDTH = 1179.452;
const PANEL_HEIGHT = 948.725;

function panelBox(x, y, width, height) {
  return {
    left: `${(x / PANEL_WIDTH) * 100}%`,
    top: `${(y / PANEL_HEIGHT) * 100}%`,
    width: `${(width / PANEL_WIDTH) * 100}%`,
    height: `${(height / PANEL_HEIGHT) * 100}%`,
  };
}

const FMIPA_ROADS = [
  [122.63, 99.23, 926.136, 61.312, "top"],
  [252.51, 246.06, 17.748, 353.352],
  [300.11, 242.83, 17.748, 353.352],
  [304.95, 402.56, 8.874, 353.352],
  [455, 242.83, 17.748, 172.642],
  [554.23, 425.15, 17.748, 150.86],
  [945.5, 425.15, 17.748, 150.86],
  [897.9, 572.79, 17.748, 162.154],
  [509.05, 571.98, 17.748, 150.86],
  [855.15, 184.74, 17.748, 230.727],
  [623.61, 408.21, 17.748, 29.043],
  [554.23, 726.87, 17.748, 29.043],
  [122.63, 242.83, 363.839, 15.328],
  [312.21, 342.87, 174.256, 15.328],
  [122.63, 595.37, 402.563, 15.328],
  [455, 400.14, 409.017, 15.328],
  [554.23, 424.35, 409.017, 15.328],
  [509.05, 719.61, 393.689, 15.328],
  [122.63, 743.82, 689.762, 15.328],
  [517.12, 571.98, 446.126, 15.328],
  [261.39, 460.65, 47.598, 15.328],
  [261.39, 356.58, 47.598, 15.328],
  [477.59, 169.42, 406.596, 15.328],
  [300.11, 140.37, 26.622, 102.456],
  [459.84, 140.37, 26.622, 102.456],
  [876.12, 140.37, 26.622, 44.371],
];

const ZIPUR_ROADS = [
  [296.19, 72.6, 27.4, 410.1],
  [351, 72.6, 27.4, 410.1],
  [296.19, 463, 765.895, 36],
  [339, 482, 36, 111],
  [488.28, 482, 543.9, 36.2],
  [1032.18, 482, 29.9, 370.3],
];

function SectionHeading({ type }) {
  const fmipa = type === "fmipa";

  return (
    <header className={`map-design-heading map-design-heading--${type}`}>
      <div className="map-design-heading__badge">DENAH</div>

      <h2 className="map-design-heading__title">
        <span className="map-design-heading__initial">
          {fmipa ? "F" : "Y"}
        </span>

        <span>{fmipa ? "MIPA " : "ON "}</span>

        <span className="map-design-heading__initial">
          {fmipa ? "U" : "Z"}
        </span>

        <span>{fmipa ? "NNES" : "IPUR"}</span>
      </h2>
    </header>
  );
}

function FmipaMap() {
  return (
    <div
      className="figma-map figma-map--fmipa"
      role="img"
      aria-label="Denah FMIPA UNNES"
    >
      {FMIPA_ROADS.map(([x, y, width, height, type], index) => (
        <div
          key={`${x}-${y}-${index}`}
          className={`fmipa-road ${
            type === "top" ? "fmipa-road--top" : ""
          }`}
          style={panelBox(x, y, width, height)}
        />
      ))}

      <div
        className="fmipa-dashed-line"
        style={panelBox(122.63, 129.48, 911.615, 2.42)}
      />

      <div
        className="fmipa-gate"
        style={panelBox(1016.49, 96.81, 94.388, 67.766)}
      >
        <span>Gerbang</span>
        <span>Utama</span>
      </div>

      <div
        className="fmipa-label"
        style={panelBox(466, 201, 355, 43)}
      >
        Parkiran FMIPA
      </div>

      <div
        className="fmipa-building fmipa-building--parking-side"
        style={panelBox(884.19, 214.59, 120.204, 200.878)}
      >
        <span>Parkiran</span>
        <span>FMIPA</span>
      </div>

      <div
        className="fmipa-building fmipa-building--d6"
        style={panelBox(122.63, 260.58, 122.624, 302.527)}
      >
        Gedung D6
      </div>

      <div
        className="fmipa-building fmipa-building--d5"
        style={panelBox(323.5, 362.23, 119.397, 183.13)}
      >
        <span>Gedung</span>
        <span>D5</span>
      </div>

      <div
        className="fmipa-building"
        style={panelBox(486.47, 271.87, 361.419, 124.238)}
      >
        Gedung D1
      </div>

      <div
        className="fmipa-building"
        style={panelBox(577.63, 443.71, 361.419, 124.238)}
      >
        Gedung D2
      </div>

      <div
        className="fmipa-building"
        style={panelBox(534.06, 591.34, 361.419, 124.238)}
      >
        Gedung D3
      </div>

      <div
        className="fmipa-building fmipa-building--d4"
        style={panelBox(442.9, 767.21, 369.486, 116.17)}
      >
        <span>Gedung D4</span>
        <strong>(Gedung Utama)</strong>
      </div>

      <div
        className="fmipa-block fmipa-block--gold"
        style={panelBox(470.33, 439.67, 77.447, 100.842)}
      />

      <div
        className="fmipa-block fmipa-block--yellow"
        style={panelBox(375.14, 283.17, 45.984, 57.278)}
      />

      <div
        className="fmipa-garden"
        style={panelBox(323.5, 620.38, 171.835, 114.557)}
      >
        Taman FMIPA
      </div>

      <div
        className="fmipa-mosque"
        style={panelBox(172.28, 609.1, 126.872, 107.432)}
      >
        <span>Mushola</span>
        <span>FMIPA</span>
      </div>
    </div>
  );
}

function ZipurMap() {
  return (
    <div
      className="figma-map figma-map--zipur"
      role="img"
      aria-label="Denah YON ZIPUR"
    >
      {ZIPUR_ROADS.map(([x, y, width, height], index) => (
        <div
          key={`${x}-${y}-${index}`}
          className="zipur-road"
          style={panelBox(x, y, width, height)}
        />
      ))}

      <div
        className="zipur-restricted"
        style={panelBox(518.96, 72.6, 585.468, 409.184)}
      >
        <div className="zipur-restricted__title">
          DAERAH TERLARANG
        </div>
      </div>

      <div
        className="zipur-field"
        style={panelBox(524.68, 199.72, 451, 279)}
      >
        Lapangan
      </div>

      <div
        className="zipur-barrack-strip"
        style={panelBox(430.59, 102.98, 61.677, 389.391)}
      />

      <div
        className="zipur-room"
        style={panelBox(439.79, 127.84, 39.583, 50.63)}
      >
        B5
      </div>

      <div
        className="zipur-room"
        style={panelBox(439.79, 198.72, 39.583, 50.63)}
      >
        B4
      </div>

      <div
        className="zipur-room"
        style={panelBox(439.79, 271.44, 39.583, 50.63)}
      >
        B3
      </div>

      <div
        className="zipur-room"
        style={panelBox(439.79, 345.09, 39.583, 50.63)}
      >
        B2
      </div>

      <div
        className="zipur-wc"
        style={panelBox(402.05, 231.86, 24.855, 17.49)}
      >
        WC
      </div>

      <div
        className="zipur-wc"
        style={panelBox(402.05, 304.58, 24.855, 17.49)}
      >
        WC
      </div>

      <div
        className="zipur-wc"
        style={panelBox(402.05, 378.23, 24.855, 17.49)}
      >
        WC
      </div>

      <div
        className="zipur-room"
        style={panelBox(230.83, 412.29, 58.915, 69.041)}
      >
        B6
      </div>

      <div
        className="zipur-wc"
        style={panelBox(202.29, 463.84, 24.855, 17.49)}
      >
        WC
      </div>

      <div
        className="zipur-office"
        style={panelBox(1021.58, 246.59, 55.233, 123.353)}
      >
        Kantor
      </div>

      <div
        className="zipur-main-gate"
        style={panelBox(1052.79, 474.36, 75.833, 55.665)}
      >
        <span>Gerbang</span>
        <span>Utama</span>
      </div>

      <div
        className="zipur-middle-strip"
        style={panelBox(509.75, 518.15, 479.605, 95.2)}
      />

      <div
        className="zipur-room"
        style={panelBox(624.82, 530.11, 48.789, 52.471)}
      />

      <div
        className="zipur-room"
        style={panelBox(700.31, 530.11, 48.789, 52.471)}
      />

      <div
        className="zipur-room"
        style={panelBox(775.79, 530.11, 48.789, 52.471)}
      >
        B1
      </div>

      <div
        className="zipur-room"
        style={panelBox(833.79, 530.11, 29.457, 52.471)}
      >
        T
      </div>

      <div
        className="zipur-room"
        style={panelBox(880.73, 530.11, 48.789, 52.471)}
      />

      <div
        className="zipur-wc"
        style={panelBox(775.79, 586.27, 24.855, 17.49)}
      >
        WC
      </div>

      <div
        className="zipur-mosque"
        style={panelBox(366.15, 528.27, 114.148, 96.657)}
      >
        Masjid
      </div>

      <div
        className="zipur-aula"
        style={panelBox(1037.47, 588.92, 59.699, 121.818)}
      >
        Aula
      </div>

      <div
        className="zipur-wc"
        style={panelBox(1037.23, 712.73, 25.688, 19.9)}
      >
        WC
      </div>

      <div
        className="zipur-garage-yard"
        style={panelBox(339.83, 620.3, 692.35, 231.95)}
      />

      <div
        className="zipur-garage"
        style={panelBox(528.16, 693.05, 155.572, 51.551)}
      >
        Garasi
      </div>

      <div
        className="zipur-garage"
        style={panelBox(528.16, 752.89, 155.572, 51.551)}
      >
        Garasi
      </div>

      <div
        className="zipur-garage"
        style={panelBox(815.37, 693.05, 155.572, 51.551)}
      >
        Garasi
      </div>

      <div
        className="zipur-garage"
        style={panelBox(815.37, 752.89, 155.572, 51.551)}
      >
        Garasi
      </div>

      <div
        className="zipur-field"
        style={panelBox(97.68, 737.72, 328, 152)}
      >
        Lapangan
      </div>
    </div>
  );
}

function MapBoard({ type, children, nodeId }) {
  return (
    <section
      className={`map-design-board map-design-board--${type}`}
      data-figma-node={nodeId}
    >
      <SectionHeading type={type} />

      <div className="map-design-frame">
        {children}
      </div>
    </section>
  );
}

export default function Map() {
  return (
    <main
      className="map-design-page"
      data-figma-node="749:1479"
    >
      <div className="map-design-page__inner">
        <h1
          className="map-design-page__title"
          data-figma-node="794:2291"
        >
          <span className="map-design-page__initial">M</span>
          <span>AP/</span>
          <span className="map-design-page__initial">D</span>
          <span>ENAH</span>
        </h1>

        <div className="map-design-sections">
          <MapBoard
            type="fmipa"
            nodeId="794:2289"
          >
            <FmipaMap />
          </MapBoard>

          <MapBoard
            type="zipur"
            nodeId="794:2290"
          >
            <ZipurMap />
          </MapBoard>
        </div>
      </div>
    </main>
  );
}