import { Flex } from "antd";
import { Navbar } from "../../components/navbar";

const ACCENT = "#4096ff";
const TEXT_PRIMARY = "#1a2332";
const TEXT_SECONDARY = "#556678";

const DataMisi = [
  "Mengembangkan platform edukasi kebencanaan yang interaktif, menarik, dan mudah digunakan oleh anak usia dini.",
  "Membantu guru, sekolah, dan institusi pendidikan dalam menyampaikan materi mitigasi bencana secara efektif dan menyenangkan.",
  "Mengintegrasikan pembelajaran dan evaluasi dalam satu sistem digital yang mendukung proses belajar yang aktif.",
  "Menumbuhkan kesadaran dan kesiapsiagaan bencana pada anak melalui pendekatan bermain dan teknologi.",
  "Memperluas akses edukasi kebencanaan dengan bekerja sama dengan sekolah dan berbagai institusi pendidikan.",
];

function About() {
  return (
    <Flex
      vertical
      align="center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8fafc 0%, #eef2f7 50%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: -120,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(64,150,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: -100,
          width: 350,
          height: 350,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Navbar />

      <main
        style={{
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
          padding: "120px 24px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 48,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 800,
            color: TEXT_PRIMARY,
            textAlign: "center",
            fontFamily: "'Quicksand', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          Tentang <span style={{ color: ACCENT }}>Kidversa</span>
        </h1>

        <div
          style={{
            width: "100%",
            padding: "40px 36px",
            borderRadius: 20,
            background: "#ffffff",
            border: "1px solid #e8ecf2",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.05)",
            textAlign: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 12px 36px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.05)";
          }}
        >
          <h2
            style={{
              margin: "0 0 6px",
              fontSize: 13,
              fontWeight: 700,
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Visi
          </h2>
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: 22,
              fontWeight: 800,
              color: TEXT_PRIMARY,
              lineHeight: 1.3,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Visi Kidversa
          </h3>

          <div
            style={{
              width: 40,
              height: 3,
              borderRadius: 2,
              background: ACCENT,
              margin: "0 auto 20px",
              opacity: 0.4,
            }}
          />

          <p
            style={{
              margin: "0 auto",
              maxWidth: 600,
              fontSize: 16,
              lineHeight: 1.75,
              color: TEXT_SECONDARY,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Mewujudkan generasi anak yang sadar dan siap menghadapi bencana
            melalui pembelajaran interaktif berbasis teknologi sejak usia dini.
          </p>
        </div>

        <Flex vertical align="center" gap={24} style={{ width: "100%" }}>
          <Flex vertical align="center" gap={4}>
            <h2
              style={{
                margin: 0,
                fontSize: 13,
                fontWeight: 700,
                color: ACCENT,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Misi
            </h2>
            <h3
              style={{
                margin: 0,
                fontSize: 22,
                fontWeight: 800,
                color: TEXT_PRIMARY,
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Misi Kidversa
            </h3>
          </Flex>

          <div
            className="misi-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
              width: "100%",
            }}
          >
            {DataMisi.map((text, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 24px",
                  borderRadius: 16,
                  background: "#ffffff",
                  border: "1px solid #e8ecf2",
                  boxShadow: "0 2px 16px rgba(0, 0, 0, 0.04)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 28px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 16px rgba(0, 0, 0, 0.04)";
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: ACCENT,
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Quicksand', sans-serif",
                    marginTop: 1,
                  }}
                >
                  {i + 1}
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: TEXT_SECONDARY,
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Flex>
      </main>

      <footer
        style={{
          width: "100%",
          padding: "20px 24px",
          marginTop: "auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 12,
            color: "#94a3b8",
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          © 2026 Kidversa. All rights reserved.
        </p>
      </footer>
    </Flex>
  );
}

export default About;
