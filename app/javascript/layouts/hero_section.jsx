import { Flex } from "antd";
import image_g from "../assets/images/image1_g.png";

export function HeroSection() {
  return (
    <Flex
      vertical
      align="center"
      className="hero-section"
      style={{
        backgroundImage: `url(${image_g})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0.05) 70%, rgba(255,255,255,0) 100%),
            radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,1) 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <Flex
        vertical
        align="center"
        gap={24}
        style={{
          position: "relative",
          zIndex: 15,
          padding: "0 24px",
          maxWidth: 860,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            margin: 0,
            color: "#ffffff",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            fontFamily: "'Quicksand', sans-serif",
            textShadow: `
              0 2px 4px rgba(0,0,0,0.5),
              0 4px 16px rgba(0,0,0,0.3)
            `,
          }}
        >
          Interactive Disaster Education <br />
          <span style={{ color: "rgba(255, 255, 255, 0.75)", fontWeight: 600 }}>
            System for Early Childhood
          </span>
        </h1>

        <button
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginTop: 12,
            padding: "12px 32px",
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.12)",
            color: "#ffffff",
            fontSize: 14,
            fontWeight: 600,
            border: "1px solid rgba(255, 255, 255, 0.25)",
            cursor: "pointer",
            letterSpacing: "0.03em",
            fontFamily: "'Quicksand', sans-serif",
            backdropFilter: "blur(8px)",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.22)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
          }}
        >
          Pelajari Lebih Lanjut
          <span style={{ fontSize: 16, lineHeight: 1 }}>↓</span>
        </button>
      </Flex>

      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: "#555",
            letterSpacing: "0.1em",
            fontFamily: "'Quicksand', sans-serif",
            fontWeight: 600,
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 28,
            background: "#888",
            borderRadius: 1,
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </Flex>
  );
}
