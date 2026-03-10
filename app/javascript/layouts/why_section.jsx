import { Flex } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";

import why1 from "../assets/images/why1.png";
import why2 from "../assets/images/why2.png";
import why3 from "../assets/images/why3.png";
import why4 from "../assets/images/why4.png";
import why5 from "../assets/images/why5.png";

const dataWhy = [
  {
    img: why1,
    text: "Solusi Lengkap: Hardware, Software, dan Sistem Pembelajaran",
  },
  {
    img: why2,
    text: "Tidak Membutuhkan Internet (Hemat Infrastruktur)",
  },
  {
    img: why3,
    text: "Membantu Pendidik Menghemat Waktu melalui Sistem Penilaian",
  },
  {
    img: why4,
    text: "Terbukti di Lapangan dan Didukung Mitra Resmi",
  },
  {
    img: why5,
    text: "Investasi Terjangkau dengan Nilai Jangka Panjang",
  },
];

function WhyCard({ item, index }) {
  return (
    <Flex
      vertical
      align="center"
      style={{
        flex: "0 1 calc(33.33% - 16px)",
        minWidth: 240,
        padding: "28px 16px",
        borderRadius: 16,
        border: "1px solid rgba(255, 255, 255, 0.5)",
        background: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
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
      {/* Circular image */}
      <img
        src={item.img}
        style={{
          width: 72,
          height: 72,
          borderRadius: "100%",
          objectFit: "cover",
          marginBottom: 16,
        }}
      />

      {/* Index number */}
      <Text
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#4096ff",
          fontFamily: "'Inter', system-ui, sans-serif",
          lineHeight: 1,
          marginBottom: 10,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </Text>

      {/* Divider */}
      <div
        style={{
          width: 32,
          height: 3,
          borderRadius: 2,
          background: "#4096ff",
          marginBottom: 14,
        }}
      />

      {/* Description */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.6,
          color: "#444",
        }}
      >
        {item.text}
      </Text>
    </Flex>
  );
}

export function WhySection() {
  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          background: "linear-gradient(180deg, #f0f4f8 0%, #e2e8f0 100%)",
          padding: "80px 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "200px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <Flex
          vertical
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
            gap: 48,
          }}
        >
          {/* Header */}
          <Flex vertical align="center" gap={16}>
            <Title
              level={2}
              style={{
                margin: 0,
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              Why Kidversa?
            </Title>
            <Text
              style={{
                maxWidth: 560,
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#64748b",
                textAlign: "center",
              }}
            >
              Kidversa bukan sekadar media pembelajaran, tetapi sistem edukasi
              mitigasi bencana terintegrasi yang dirancang khusus untuk
              kebutuhan anak usia dini, dengan keseimbangan antara kualitas,
              fitur, dan keterjangkauan.
            </Text>
          </Flex>

          {/* Cards */}
          <Flex gap={20} justify="center" wrap>
            {dataWhy.map((item, i) => (
              <WhyCard key={i} item={item} index={i} />
            ))}
          </Flex>
        </Flex>
      </section>
    </>
  );
}
