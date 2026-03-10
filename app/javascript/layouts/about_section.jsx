import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import FocusImg from "../assets/images/focus.png";
import ManfaatImg from "../assets/images/manfaat.png";
import MudahImg from "../assets/images/mudah.png";

const DataGambar = [FocusImg, ManfaatImg, MudahImg];

const DataAbout = [
  {
    title: "Fokus Utama",
    content: [
      "Pembelajaran edukasi kebencanaan yang mudah dipahami anak",
      "Sistem penilaian digital terintegrasi",
      "Penyusunan narasi rapor otomatis berbasis AI",
      "Akses transparan bagi orang tua",
    ],
  },
  {
    title: "Manfaat Utama",
    content: [
      "Mengurangi beban administrasi pendidik",
      "Meningkatkan kualitas laporan perkembangan siswa",
      "Menyediakan sistem pembelajaran modern",
      "Mengintegrasikan belajar dan evaluasi dalam satu platform",
    ],
  },
  {
    title: "Mudah Digunakan",
    content: [
      "Tidak memerlukan instalasi rumit",
      "Siap digunakan dalam hitungan menit",
      "Dirancang sesuai kebutuhan sekolah",
    ],
  },
];

function CustomCard({ title, content, i }) {
  return (
    <Flex
      vertical
      align="center"
      style={{
        flex: "0 0 280px",
        minWidth: 240,
        maxWidth: 360,
        padding: "32px 24px",
        borderRadius: 16,
        border: "1px solid #e8e8e8",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
        background: "#ffffff",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.10)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.06)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <img
        src={DataGambar[i]}
        style={{
          width: 88,
          height: 88,
          borderRadius: "100%",
          objectFit: "cover",
          marginBottom: 20,
        }}
      />

      {/* Title */}
      <Title
        level={4}
        style={{
          textAlign: "center",
          margin: 0,
          marginBottom: 12,
        }}
      >
        {title}
      </Title>

      {/* Divider */}
      <div
        style={{
          width: 40,
          height: 3,
          borderRadius: 2,
          background: "#4096ff",
          marginBottom: 20,
        }}
      />

      {/* Content list */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          margin: 0,
          padding: 0,
          width: "100%",
        }}
      >
        {content.map((v, idx) => (
          <li
            key={idx}
            style={{
              listStyleType: "none",
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontSize: 14,
              color: "#555",
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                color: "#4096ff",
                fontWeight: 700,
                fontSize: 16,
                lineHeight: 1.5,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            {v}
          </li>
        ))}
      </ul>
    </Flex>
  );
}

export function AboutSection() {
  return (
    <section
      style={{
        width: "100%",
        padding: "80px 0",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 120,
          marginTop: -200,
          position: "relative",
          zIndex: 10,
          background:
            "linear-gradient(180deg,rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      />
      <Flex
        vertical
        gap={60}
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "60px 24px 0",
        }}
      >
        <Flex vertical align="center" gap={16}>
          <Title
            style={{
              margin: 0,
              fontSize: 40,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Kidversa?
          </Title>
          <Text
            style={{
              maxWidth: 560,
              textAlign: "center",
              fontSize: 16,
              lineHeight: 1.7,
              color: "#666",
            }}
          >
            Kidversa adalah Interactive Digital Storytelling-based Learning yang
            dirancang untuk meningkatkan pemahaman kesiapsiagaan anak melalui
            pendekatan visual, simulatif, dan terstruktur.
          </Text>
        </Flex>

        <div
          className="about-cards-scroll"
          style={{
            display: "flex",
            gap: 28,
            justifyContent: "center",
            width: "100%",
          }}
        >
          {DataAbout.map((v, i) => (
            <CustomCard key={i} title={v.title} content={v.content} i={i} />
          ))}
        </div>
      </Flex>
      <style>{`
        @media (max-width: 768px) {
          .about-cards-scroll {
            justify-content: flex-start !important;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px;
          }
          .about-cards-scroll::-webkit-scrollbar {
            display: none;
          }
          .about-cards-scroll > * {
            scroll-snap-align: start;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
