import { Flex } from "antd";

const TEXT_MUTED = "#94a3b8";
const TEXT_FOOTER = "#64748b";
const ACCENT = "#4096ff";
const WAVE_COLOR = "#bfc9d8";

function FooterSection() {
  return (
    <>
      <div
        style={{
          width: "100%",
          lineHeight: 0,
          background: WAVE_COLOR,
          marginTop: -1,
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          style={{
            display: "block",
            width: "100%",
            height: 60,
          }}
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <footer
        style={{
          width: "100%",
          background: "#ffffff",
          padding: "20px 0 32px",
        }}
      >
        <Flex
          vertical
          align="center"
          gap={20}
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <Flex align="center" gap={8}>
            <span
              style={{
                fontSize: 22,
                fontWeight: 800,
                color: ACCENT,
                fontFamily: "'Quicksand', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Kidversa
            </span>
          </Flex>

          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: TEXT_FOOTER,
              textAlign: "center",
              lineHeight: 1.6,
              maxWidth: 420,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            Interactive Digital Storytelling-based Learning untuk edukasi
            kebencanaan anak usia dini.
          </p>

          <div
            style={{
              width: 80,
              height: 1,
              background: "#e2e8f0",
            }}
          />

          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: TEXT_MUTED,
              textAlign: "center",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            © 2026 Kidversa. All rights reserved.
          </p>
        </Flex>
      </footer>
    </>
  );
}

export default FooterSection;
