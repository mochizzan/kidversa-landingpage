import { useEffect, useRef, useState } from "react";
import { Flex } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

const ACCENT = "#4096ff";
const TEXT_PRIMARY = "#1a2332";
const TEXT_SECONDARY = "#556678";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

function StatCard({ number, suffix, label, description, badge, partner }) {
  const { count, ref } = useCountUp(number, 1800);

  return (
    <div
      ref={ref}
      style={{
        flex: "1 1 280px",
        minWidth: 240,
        background: "#ffffff",
        borderRadius: 20,
        padding: "36px 28px 32px",
        textAlign: "center",
        border: "1px solid rgba(64, 150, 255, 0.12)",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 16px 48px rgba(64, 150, 255, 0.18)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0, 0, 0, 0.06)";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 60,
          height: 4,
          borderRadius: "0 0 4px 4px",
          background: ACCENT,
        }}
      />

      {badge && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 14px",
            borderRadius: 100,
            background: "rgba(64, 150, 255, 0.08)",
            border: "1px solid rgba(64, 150, 255, 0.15)",
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 14 }}>{badge.icon}</span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: ACCENT,
              letterSpacing: "0.1em",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            {badge.text}
          </span>
        </div>
      )}

      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          color: ACCENT,
          lineHeight: 1,
          fontFamily: "'Quicksand', sans-serif",
          marginBottom: 6,
          letterSpacing: "-0.02em",
        }}
      >
        {count}
        {suffix && (
          <span
            style={{
              fontSize: 26,
              fontWeight: 700,
              marginLeft: 2,
            }}
          >
            {suffix}
          </span>
        )}
      </div>

      <div
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: TEXT_PRIMARY,
          marginBottom: 8,
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        {label}
      </div>

      <div
        style={{
          width: 32,
          height: 3,
          borderRadius: 2,
          background: ACCENT,
          marginBottom: 12,
          opacity: 0.5,
        }}
      />

      <div
        style={{
          fontSize: 13,
          lineHeight: 1.6,
          color: TEXT_SECONDARY,
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        {description}
      </div>

      {partner && (
        <div
          style={{
            marginTop: 14,
            padding: "12px 16px",
            borderRadius: 12,
            background: "rgba(64, 150, 255, 0.04)",
            border: "1px solid rgba(64, 150, 255, 0.08)",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: TEXT_PRIMARY,
              marginBottom: 2,
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            {partner.name}
          </div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: TEXT_SECONDARY,
              fontFamily: "'Quicksand', sans-serif",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            <span>{partner.flag}</span>
            {partner.shortName}
          </div>
        </div>
      )}
    </div>
  );
}

function CollaborationSection() {
  return (
    <section
      style={{
        width: "100%",
        background:
          "linear-gradient(180deg, #d2dbe6 0%, #c8d3e0 50%, #bfc9d8 100%)",
        padding: "80px 0 100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Flex
        vertical
        align="center"
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
        gap={48}
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
            Collaboration
          </Title>
          <Text
            style={{
              maxWidth: 560,
              fontSize: 16,
              lineHeight: 1.7,
              color: TEXT_SECONDARY,
              textAlign: "center",
            }}
          >
            Dipercaya oleh berbagai institusi pendidikan dan pemerintah, baik di
            tingkat nasional maupun internasional.
          </Text>
        </Flex>

        <Flex
          className="collab-cards"
          gap={24}
          justify="center"
          wrap
          style={{ width: "100%" }}
        >
          <StatCard
            number={32}
            suffix="+"
            label="Mitra Sekolah"
            description="Sekolah di seluruh Indonesia yang telah bermitra dan menggunakan sistem Kidversa"
            badge={{ icon: "🇮🇩", text: "NASIONAL" }}
          />
          <StatCard
            number={5}
            label="Instansi Pemerintah"
            description="Lembaga pemerintah yang mendukung dan berkolaborasi dalam pengembangan Kidversa"
            badge={{ icon: "🇮🇩", text: "NASIONAL" }}
          />
          <StatCard
            number={1}
            label="Mitra Internasional"
            description="Kolaborasi riset dan pengembangan pendidikan anak usia dini berskala global"
            badge={{ icon: "🌍", text: "INTERNASIONAL" }}
            partner={{
              name: "The National Child Development Research Centre",
              flag: "🇲🇾",
              shortName: "NCDRC — Malaysia",
            }}
          />
        </Flex>
      </Flex>
      <style>{`
        @media (max-width: 768px) {
          .collab-cards > * {
            flex: 1 1 100% !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default CollaborationSection;
