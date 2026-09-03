import "../styles/interface-info.css";
import "../styles/interface-info.css";

// Import icon images
import chairpersonIcon from "../assets/icons/chairperson.png";
import consumptionIcon from "../assets/icons/consumption.png";
import creativeIcon from "../assets/icons/creative.png";
import equipmentIcon from "../assets/icons/equipment.png";
import eventIcon from "../assets/icons/event.png";
import facilitatorIcon from "../assets/icons/facilitator.png";
import fieldCommanderIcon from "../assets/icons/field-commander.png";
import healthIcon from "../assets/icons/health.png";
import mentorIcon from "../assets/icons/mentor.png";
import pddIcon from "../assets/icons/pdd.png";
import publicRelationsIcon from "../assets/icons/public-relations.png";
import secretaryIcon from "../assets/icons/secretary.png";
import sponsorIcon from "../assets/icons/sponsor.png";
import steeringCommitteeIcon from "../assets/icons/steering-committee.png";
import treasurerIcon from "../assets/icons/treasurer.png";

const COLORS = {
  pink: "#ff59fb",
  purple: "#9513ff",
  blue: "#189cf4",
  yellow: "#ffd900",
};

const informationSections = [
  {
    title: "Tentang Interface",
    color: COLORS.yellow,
    labelFill: "#fff7c7",
    align: "left",
    paragraphs: [
      "Introduction of Computer Science atau yang lebih dikenal dengan INTERFACE, adalah program kerja tahunan Himpunan Mahasiswa Ilmu Komputer (HIMA ILKOM) Universitas Negeri Semarang yang menjadi gerbang awal bagi mahasiswa baru untuk mengenal dunia rumpun Ilmu Komputer secara menyeluruh.",
      "Program ini menjadi jembatan transisi dari dunia sekolah menuju dunia perkuliahan melalui serangkaian kegiatan yang terstruktur dan berkesinambungan. Selain aspek akademik dan lingkungan kampus, Interface juga mengenalkan budaya, nilai, dan dinamika kehidupan sebagai bagian dari keluarga besar Ilmu Komputer, menjadikannya fondasi awal sebelum mahasiswa baru melangkah lebih jauh dalam perjalanan akademik dan profesionalnya.",
    ],
  },
  {
    title: "Konsep Interface",
    color: COLORS.blue,
    labelFill: "#cceeff",
    align: "right",
    paragraphs: [
      "Berbeda dari orientasi jurusan pada umumnya, Interface 2026 dirancang sebagai perjalanan pengenalan yang utuh: mahasiswa baru memulainya sebagai player dan menyelesaikannya sebagai programmer, sebuah proses yang mengantarkan mereka memahami lingkungan akademik, membangun relasi, serta menemukan jati diri di tengah komunitas Ilmu Komputer.",
      "Perjalanan ini diwujudkan melalui konsep Game In Real Life, pendekatan yang menghadirkan narasi permainan ke dalam rangkaian kegiatan orientasi. Setiap mahasiswa baru diposisikan sebagai player yang menjalani tiap tahapan sebagai satu kesatuan perjalanan yang saling berkaitan, di mana setiap momen menjadi bagian dari proses pembentukan diri yang berkelanjutan. Karena itu, keikutsertaan pada setiap tahap menjadi bagian penting dari keutuhan perjalanan tersebut.",
    ],
  },
  {
    title: "Tema & Makna",
    color: COLORS.purple,
    labelFill: "#e6c4ff",
    align: "left",
    paragraphs: [
      <>
        Tema: <strong>&quot;Building Terrain: Hello World!&quot;</strong>
        <br />
        Tagline: <strong>Ready? Go!</strong>
      </>,
      "Tema ini merepresentasikan proses awal mahasiswa baru dalam membangun fondasi (terrain) di dunia perkuliahan Ilmu Komputer UNNES. Sebagaimana sebuah dunia yang terbentuk dari titik nol, mahasiswa baru datang dengan potensi yang akan dibentuk melalui proses pengenalan lingkungan, pembangunan relasi, dan penguatan identitas sebagai bagian dari keluarga besar Ilmu Komputer.",
      'Frasa "Hello, World!" merepresentasikan output pertama dari proses tersebut, yakni pernyataan kesiapan mahasiswa baru untuk memasuki dan menjalani dunia perkuliahan Ilmu Komputer.',
    ],
  },
  {
    title: "Tujuan Interface",
    color: COLORS.pink,
    labelFill: "#ffd2fd",
    align: "right",
    paragraphs: [
      "Interface 2026 bertujuan menjadikan dirinya sebagai wadah kolaborasi strategis dan interaktif yang menyatukan mahasiswa Ilmu Komputer dalam semangat kekeluargaan, sekaligus mempersiapkan mentalitas mahasiswa yang tangguh, adaptif, dan suportif dalam menjalani dinamika dunia perkuliahan. Nilai-nilai inti yang ditanamkan melalui pencapaian tujuan tersebut meliputi kebersamaan, adaptabilitas, ketahanan mental, kolaborasi, dan sense of belonging.",
    ],
  },
];

const schedule = [
  {
    title: "Prologue: Patch Notes!",
    date: "Sabtu, 29 Agustus 2026",
    color: COLORS.pink,
    description:
      "Sesi penyampaian informasi teknis mengenai aturan, ketentuan, dan susunan acara yang perlu dipahami mahasiswa baru sebelum resmi memasuki rangkaian kegiatan Interface 2026.",
  },
  {
    title: "Chapter 1: Spawn Point",
    date: "Sabtu, 5 September 2026",
    color: COLORS.purple,
    description:
      "Merupakan titik awal keberangkatan mahasiswa baru dalam rangkaian Interface 2026, sekaligus momen pertama mahasiswa baru berpijak di lingkungan Ilmu Komputer UNNES sebagai fondasi perjalanan berikutnya.",
  },
  {
    title: "Chapter 2: Questline PKMMPD",
    date: "Minggu, 6 September 2026",
    color: COLORS.blue,
    description:
      "Pelatihan Kepemimpinan dan Manajemen Mahasiswa Pra Dasar (PKMMPD) yang dirancang untuk mengembangkan kapasitas kepemimpinan dan manajemen mahasiswa baru secara bertahap, layaknya karakter yang terus berkembang dalam permainan.",
  },
  {
    title: "Connection Chapter",
    date: "Kamis, 10 September 2026",
    color: "#00ef8d",
    description:
      "Kegiatan yang dirancang khusus untuk memperkenalkan jajaran dosen Ilmu Komputer kepada mahasiswa baru. Dosen merupakan salah satu komponen penting dalam dunia perkuliahan yang akan dijalani mahasiswa baru, sehingga kegiatan ini menjadi sarana membangun koneksi sejak tahap awal.",
  },
  {
    title: "Next Chapter: Into The Komputek Verse",
    date: "Jum’at–Minggu, 11–13 September 2026",
    color: COLORS.yellow,
    description:
      'Tahap puncak yang menandai peleburan penuh mahasiswa baru sebagai bagian dari keluarga besar Komputek. Penamaan "Next Chapter", bukan "Chapter 3", dimaksudkan untuk menegaskan bahwa tahap ini bukan merupakan penutup, melainkan awal dari babak baru yang akan terus berlanjut.',
  },
];

const committeeColumns = [
  [
    {
      title: "Archiever",
      role: "Sekretaris",
      badge: "S",
      count: 2,
      names: [
        " Rara",
        "Jenifer",
      ],
      color: COLORS.pink,
      icon: secretaryIcon,
    },
    {
      title: "Game Architect",
      role: "Sie. Acara",
      badge: "A",
      count: 7,
      names: [
        "Damar",
        "Silfia",
        "Selma",
        "Jalita",
        "Rafif",
        "Rangga",
        "Ibnu",
      ],
      color: COLORS.pink,
      icon: eventIcon,
    },
    {
      title: "Guild Messenger",
      role: "Sie. Humas",
      badge: "H",
      count: 6,
      names: [
        "Raza",
        "Alya Fuji",
        "Tamma",
        "Samudra",
        "Putri",
        "Amelia",
      ],
      color: COLORS.pink,
      icon: publicRelationsIcon,
    },
    {
      title: "Healer",
      role: "Sie. Kesehatan",
      badge: "+",
      count: 8,
      names: [
        "Luluk",
        "Okta",
        "Sabilla",
        "Graselia",
        "Nabila",
        "Indah",
        "Adrian",
      ],
      color: COLORS.blue,
      icon: healthIcon,
    },
  ],
  [
    {
      title: "High Council",
      role: "Steering Committee",
      badge: "SC",
      count: 2,
      names: [
        "Yaafi",
        "Sabar",
      ],
      color: COLORS.yellow,
      icon: steeringCommitteeIcon,
    },
    {
      title: "Game Master",
      role: "Ketua Pelaksana",
      badge: "GM",
      count: 1,
      names: [
        "Evo",
      ],
      color: COLORS.yellow,
      icon: chairpersonIcon,
    },
    {
      title: "Artisan",
      role: "Sie. PDD",
      badge: "P",
      count: 9,
      names: [
        "Hakim",
        "Afza",
        "Aurelia",
        "Rafi",
        "Dani",
        "Raiska",
        "Hafid",
        "Satria",
        "Yakaria",
      ],
      color: COLORS.blue,
      icon: pddIcon,
    },
    {
      title: "Game Resources",
      role: "Sie. Perkap",
      badge: "R",
      count: 10,
      names: [
        "Haridar",
        "Rizki",
        "Batara",
        "Dariel",
        "Aqmar",
        "Avicenna",
        "Noya",
        "Miftah",
        "Docil",
      ],
      color: COLORS.blue,
      icon: equipmentIcon,
    },
  ],
  [
    {
      title: "Gold Steward",
      role: "Bendahara",
      badge: "$",
      count: 2,
      names: [
        "Ryan A",
        "Tika",
      ],
      color: COLORS.pink,
      icon: treasurerIcon,
    },
    {
      title: "Game Designer",
      role: "Sie. Kreatif",
      badge: "K",
      count: 8,
      names: [
        "Lintang",
        "Mutia",
        "Azzel",
        "Vani",
        "Elisa",
        "Sufi",
        "Pelita",
        "Sulthan",
      ],
      color: COLORS.pink,
      icon: creativeIcon,
    },
    {
      title: "Hunger Keeper",
      role: "Sie. Konsumsi",
      badge: "C",
      count: 7,
      names: [
        "Ibrahim",
        "Raras",
        "Alice",
        "Farida",
        "Maulidia",
        "Moses",
        "Zahra Ahya",
      ],
      color: COLORS.pink,
      icon: consumptionIcon,
    },
    {
      title: "Merchant Guild",
      role: "Sie. Sponsor",
      badge: "SP",
      count: 6,
      names: [
        "Azza",
        "Rafa",
        "Caca",
        "Zhafira",
        "Abigail",
        "Fardhan",
      ],
      color: COLORS.blue,
      icon: sponsorIcon,
    },
  ],
];

const wideCommitteeCards = [
  {
    title: "Field Commander",
    role: "Sie. Korlap",
    badge: "FC",
    count: 7,
    names: [
      "Nouval Almuzacky",
      "Saghita",
      "Wira",
      "Elizabeth",
      "Adila",
      "Alvin",
      "Rakha",
    ],
    columns: 2,
    color: COLORS.blue,
    icon: fieldCommanderIcon,
  },
  {
    title: "Narrator",
    role: "Fasilitator",
    badge: "N",
    count: 10,
    names: [
      "Syalomita",
      "Rosita",
      "Bintang",
      "Dika",
      "Marca",
      "Nouval Ar-Rizqy",
    ],
    columns: 2,
    color: COLORS.blue,
    icon: facilitatorIcon,
  },
];

const mentorCard = {
  title: "Guild Mentor",
  role: "Pendamping",
  badge: "M",
  count: 24,
  names: [
    "Adjie",
    "Nadine",
    "Naila",
    "Marsanda",
    "Ryan S",
    "Huwalda",
    "Yosea",
    "Oryza",
    "Ardin",
    "Diandra",
    "Reza",
    "Fadhil",
    "Rayya",
    "Hafidz",
    "Helmi",
    "Adinda",
    "Karina",
    "Yusuf",
    "Hema",
    "Nadin",
    "Alya",
    "Aska",
    "Gaska",
    "Ridho",
  ],
  columns: 4,
  color: COLORS.purple,
  icon: mentorIcon,
};

function DisplayHeading({
  children,
  className = "",
  as: Tag = "h2",
}) {
  return (
    <Tag className={`ii-display-heading ${className}`.trim()}>
      {children}
    </Tag>
  );
}

function InformationCard({ section }) {
  const isRight = section.align === "right";

  return (
    <article
      className={`ii-information-card ${isRight ? "is-right" : ""}`}
      style={{
        "--accent": section.color,
        "--label-fill": section.labelFill,
      }}
    >
      <h3 className="ii-information-label">
        {section.title}
      </h3>

      <div className="ii-information-copy">
        {section.paragraphs.map((paragraph, index) => (
          <p key={`${section.title}-${index}`}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

function RoleCard({ card, wide = false }) {
  const columns = card.columns ?? 1;
  const rows = Math.ceil(card.count / columns);
  const minimumHeight =
    card.count === 1 ? 136 : 96 + rows * 57;

  const names = card.names ?? [];

  return (
    <article
      className={`ii-role-card ${wide ? "is-wide" : ""}`}
      style={{
        "--accent": card.color,
        "--card-min-height": `${minimumHeight}px`,
        "--name-columns": columns,
      }}
    >
      <div className="ii-role-header">
        {card.icon && (
          <div className="ii-role-icon">
            <img src={card.icon} alt={card.title} />
          </div>
        )}
        <div className="ii-role-badge" aria-hidden="false">
          {/* <span>{card.badge}</span> */}
        </div>

        <div className="ii-role-title-wrap">
          <h3>{card.title}</h3>
        </div>

        <p className="ii-role-subtitle">
          {card.role}
        </p>
      </div>

      <div className="ii-role-names">
        {names.map((name, index) => (
          <span key={`${card.title}-${name}-${index}`}>
            {name}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function InterfaceInfo() {
  return (
    <main className="ii-page">
      <section
        className="ii-information-section"
        aria-labelledby="interface-information-title"
      >
        <DisplayHeading
          as="h1"
          className="ii-information-heading"
        >
          <span className="ii-heading-line">
            <span className="ii-heading-accent">
              I
            </span>
            nterface
          </span>

          <span className="ii-heading-line">
            <span className="ii-heading-accent">
              I
            </span>
            nformation
          </span>
        </DisplayHeading>

        <div className="ii-information-list">
          {informationSections.map((section) => (
            <InformationCard
              key={section.title}
              section={section}
            />
          ))}
        </div>
      </section>

      <section
        className="ii-schedule-section"
        aria-labelledby="interface-schedule-title"
      >
        <div className="ii-schedule-inner">
          <DisplayHeading
            className="ii-schedule-heading"
          >
            <span className="ii-heading-line">
              <span className="ii-heading-accent">
                S
              </span>
              truktur
            </span>

            <span className="ii-heading-line">
              <span className="ii-heading-accent">
                R
              </span>
              angkaian{" "}
              <span className="ii-heading-accent">
                A
              </span>
              cara
            </span>
          </DisplayHeading>

          <h2
            id="interface-schedule-title"
            className="ii-visually-hidden"
          >
            Struktur Rangkaian Acara
          </h2>

          <p className="ii-schedule-intro">
            Penamaan rangkaian kegiatan Interface 2026
            mengikuti struktur narasi yang lazim
            ditemukan pada game bergenre RPG
            (Role-Playing Game), yang terbagi ke dalam
            beberapa babak sebagai berikut.
          </p>

          <div className="ii-schedule-list">
            {schedule.map((item) => (
              <article
                key={item.title}
                className="ii-schedule-item"
                style={{ "--accent": item.color }}
              >
                <h3>{item.title}</h3>
                <time>{item.date}</time>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ii-committee-section"
        aria-labelledby="interface-committee-title"
      >
        <DisplayHeading className="ii-committee-heading">
          <span className="ii-heading-line">
            <span className="ii-heading-accent">
              S
            </span>
            truktur
          </span>

          <span className="ii-heading-line">
            <span className="ii-heading-accent">
              K
            </span>
            epanitiaan
          </span>
        </DisplayHeading>

        <h2
          id="interface-committee-title"
          className="ii-visually-hidden"
        >
          Struktur Kepanitiaan
        </h2>

        <div className="ii-committee-columns">
          {committeeColumns.map(
            (column, columnIndex) => (
              <div
                className="ii-committee-column"
                key={`committee-column-${columnIndex}`}
              >
                {column.map((card) => (
                  <RoleCard
                    card={card}
                    key={card.title}
                  />
                ))}
              </div>
            ),
          )}
        </div>

        <div className="ii-wide-card-grid">
          {wideCommitteeCards.map((card) => (
            <RoleCard
              card={card}
              key={card.title}
              wide
            />
          ))}
        </div>

        <RoleCard card={mentorCard} wide />
      </section>
    </main>
  );
}