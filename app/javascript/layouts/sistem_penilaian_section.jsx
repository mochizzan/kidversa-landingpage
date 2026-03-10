import { Flex } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

const DataSistemPenilaian = [
  {
    title: "Pendidik Cukup Mengisi Indikator Penilaian",
    content: ["Checklist perkembangan anak", 'Tekan tombol "Simpan Penilaian"'],
    icon: "📋",
  },
  {
    title: "Sistem Menganalisis Otomatis",
    content: [
      "Membaca profil anak",
      "Mengelompokkan aspek yang berkembang sangat baik",
      "Mengidentifikasi aspek yang perlu bimbingan",
    ],
    icon: "⚙️",
  },
  {
    title: "AI Menyusun Catatan Rapor Otomatis",
    content: [
      "Narasi deskriptif profesional",
      "Bahasa baku dan variatif",
      "Setiap anak memiliki kalimat unik",
    ],
    icon: "🤖",
  },
  {
    title: "Pendidik Tetap Memiliki Kendali",
    content: [
      "Bisa langsung digunakan",
      "Bisa diedit sesuai pengalaman di kelas",
      "Tidak perlu mengetik dari nol",
    ],
    icon: "✏️",
  },
  {
    title: "Siap Ditampilkan & Dicetak",
    content: [
      "Orang tua bisa mengakses melalui NISN",
      "Otomatis tersusun rapi di PDF rapor",
    ],
    icon: "🖨️",
  },
];

const ACCENT = "#4096ff";
const CARD_BG = "#ffffff";
const TEXT_PRIMARY = "#1a2332";
const TEXT_SECONDARY = "#556678";
const LINE_COLOR = "#b0c4de";

function TimelineCard({ item, index, isLeft }) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: isLeft ? "flex-end" : "flex-start",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: isLeft ? "flex-end" : "flex-start",
          paddingRight: isLeft ? 40 : 0,
          paddingLeft: isLeft ? 0 : 40,
        }}
      >
        {isLeft ? (
          <CardContent
            item={item}
            index={index}
            stepNumber={stepNumber}
            alignRight
          />
        ) : (
          <div style={{ width: "100%" }} />
        )}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: CARD_BG,
          border: `3px solid ${ACCENT}`,
          boxShadow: `0 4px 16px rgba(64, 150, 255, 0.25)`,
          fontSize: 24,
          flexShrink: 0,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15)";
          e.currentTarget.style.boxShadow =
            "0 6px 24px rgba(64, 150, 255, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 16px rgba(64, 150, 255, 0.25)";
        }}
      >
        {item.icon}
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: isLeft ? "flex-start" : "flex-start",
          paddingLeft: isLeft ? 0 : 40,
          paddingRight: isLeft ? 40 : 0,
        }}
      >
        {!isLeft ? (
          <CardContent item={item} index={index} stepNumber={stepNumber} />
        ) : (
          <div style={{ width: "100%" }} />
        )}
      </div>
    </div>
  );
}

function CardContent({ item, stepNumber, alignRight }) {
  return (
    <div
      style={{
        maxWidth: 420,
        width: "100%",
        background: CARD_BG,
        borderRadius: 16,
        padding: "28px 28px 24px",
        border: "1px solid #dce5ef",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        position: "relative",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.06)";
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 14,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            borderRadius: 8,
            background: ACCENT,
            color: "#fff",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          {stepNumber}
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: ACCENT,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          Langkah {stepNumber}
        </span>
      </div>

      <h3
        style={{
          margin: "0 0 12px",
          fontSize: 18,
          fontWeight: 700,
          color: TEXT_PRIMARY,
          lineHeight: 1.4,
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        {item.title}
      </h3>

      <div
        style={{
          width: 40,
          height: 3,
          borderRadius: 2,
          background: ACCENT,
          marginBottom: 16,
        }}
      />

      <ul
        style={{
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {item.content.map((text, idx) => (
          <li
            key={idx}
            style={{
              listStyleType: "none",
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              fontSize: 14,
              lineHeight: 1.65,
              color: TEXT_SECONDARY,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            <span
              style={{
                color: ACCENT,
                fontWeight: 700,
                fontSize: 15,
                lineHeight: 1.5,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            {text}
          </li>
        ))}
      </ul>

      <div
        style={{
          position: "absolute",
          top: 24,
          [alignRight ? "right" : "left"]: -10,
          width: 0,
          height: 0,
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
          [alignRight ? "borderLeft" : "borderRight"]: `10px solid ${CARD_BG}`,
        }}
      />
    </div>
  );
}

function MobileTimelineCard({ item, index }) {
  const stepNumber = String(index + 1).padStart(2, "0");
  const isLast = index === DataSistemPenilaian.length - 1;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        position: "relative",
        gap: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: CARD_BG,
            border: `3px solid ${ACCENT}`,
            boxShadow: `0 3px 12px rgba(64, 150, 255, 0.25)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            flexShrink: 0,
            zIndex: 2,
          }}
        >
          {item.icon}
        </div>
        {!isLast && (
          <div
            style={{
              flex: 1,
              width: 3,
              background: LINE_COLOR,
              borderRadius: 2,
              minHeight: 20,
            }}
          />
        )}
      </div>

      <div style={{ flex: 1, paddingBottom: isLast ? 0 : 24 }}>
        <CardContent item={item} index={index} stepNumber={stepNumber} />
      </div>
    </div>
  );
}

function SistemPenilaianSection() {
  return (
    <section
      style={{
        width: "100%",
        background:
          "linear-gradient(180deg, #e2e8f0 0%, #dae2ec 40%, #d2dbe6 100%)",
        padding: "80px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Flex
        vertical
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
        gap={60}
      >
        <Flex vertical align="center" gap={16}>
          <Title
            level={2}
            style={{
              margin: 0,
              fontSize: 40,
              fontWeight: 700,
              lineHeight: 1.2,
              textAlign: "center",
              color: TEXT_PRIMARY,
            }}
          >
            Sistem Penilaian
          </Title>
          <Text
            style={{
              maxWidth: 600,
              fontSize: 16,
              lineHeight: 1.7,
              color: TEXT_SECONDARY,
              textAlign: "center",
            }}
          >
            Proses penilaian yang sederhana namun komprehensif — dari pengisian
            indikator hingga rapor siap cetak, semuanya terintegrasi dalam satu
            alur.
          </Text>
        </Flex>

        <div
          className="timeline-desktop"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 3,
              background: LINE_COLOR,
              transform: "translateX(-50%)",
              borderRadius: 2,
              zIndex: 1,
            }}
          />

          {DataSistemPenilaian.map((item, i) => (
            <TimelineCard key={i} item={item} index={i} isLeft={i % 2 === 0} />
          ))}

          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: -12,
              width: 24,
              height: 24,
              borderRadius: "50%",
              background: ACCENT,
              transform: "translateX(-50%)",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>
              ✓
            </span>
          </div>
        </div>

        <div
          className="timeline-mobile"
          style={{
            display: "none",
            flexDirection: "column",
          }}
        >
          {DataSistemPenilaian.map((item, i) => (
            <MobileTimelineCard key={i} item={item} index={i} />
          ))}
        </div>
      </Flex>

      <style>{`
        @media (max-width: 768px) {
          .timeline-desktop {
            display: none !important;
          }
          .timeline-mobile {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}

export default SistemPenilaianSection;
