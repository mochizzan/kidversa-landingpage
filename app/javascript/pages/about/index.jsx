import { Card, Flex, Space, Divider, Typography, Row, Col, Tag } from "antd";
import { Navbar } from "../../components/navbar";
import { useState } from "react";
import {
  SafetyOutlined,
  TeamOutlined,
  GlobalOutlined,
  BookOutlined,
  RocketOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { Meta } from "antd/es/list/Item";
import { FooterSection2 } from "../../layouts/footer_section_2";
import { Head } from "@inertiajs/react";

const { Title, Text, Paragraph } = Typography;

const ACCENT = "#4096ff";
const TEXT_PRIMARY = "#1a2332";
const TEXT_SECONDARY = "#556678";

const DataMisi = [
  {
    text: "Mengembangkan platform edukasi kebencanaan yang interaktif, menarik, dan mudah digunakan oleh anak usia dini.",
    icon: <RocketOutlined />,
  },
  {
    text: "Membantu guru, sekolah, dan institusi pendidikan dalam menyampaikan materi mitigasi bencana secara efektif dan menyenangkan.",
    icon: <BookOutlined />,
  },
  {
    text: "Mengintegrasikan pembelajaran dan evaluasi dalam satu sistem digital yang mendukung proses belajar yang aktif.",
    icon: <CheckCircleFilled />,
  },
  {
    text: "Menumbuhkan kesadaran dan kesiapsiagaan bencana pada anak melalui pendekatan bermain dan teknologi.",
    icon: <SafetyOutlined />,
  },
  {
    text: "Memperluas akses edukasi kebencanaan dengan bekerja sama dengan sekolah dan berbagai institusi pendidikan.",
    icon: <GlobalOutlined />,
  },
];

function ProfileCard({ anggota }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      hoverable
      styles={{
        body: { padding: 0 },
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 200,
        height: 250,
        background: `url(${anggota.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "flex-end",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Meta
        title={anggota.nama}
        description={anggota.jabatan}
        style={{
          color: "#fff",
          background:
            "linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
          padding: 24,
          backdropFilter: hovered ? "blur(3px)" : "blur(1px)",
          borderRadius: hovered ? 8 : "0 0 8px 8px",
          transition: "0.2s ease",
          height: hovered ? 240 : 100,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      />
    </Card>
  );
}

function About({ data_image_team }) {
  return (
    <>
      <Head>
        <title>Kidversa - About</title>
      </Head>
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
            maxWidth: 1200,
            margin: "0 auto",
            padding: "120px 24px 80px",
          }}
        >
          <Space
            direction="vertical"
            align="center"
            size="small"
            style={{ width: "100%", marginBottom: 64 }}
          >
            <Title
              level={1}
              style={{
                margin: 0,
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 800,
                color: TEXT_PRIMARY,
                textAlign: "center",
                fontFamily: "'Quicksand', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Tentang <span style={{ color: ACCENT }}>Kidversa</span>
            </Title>
            <Paragraph
              style={{
                maxWidth: 600,
                textAlign: "center",
                color: TEXT_SECONDARY,
                fontSize: 16,
                marginTop: 16,
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Platform edukasi kebencanaan interaktif untuk Pendidikan Anak usia dini.
            </Paragraph>
          </Space>

          <Row justify="center" style={{ marginBottom: 80 }}>
            <Col xs={24} lg={20} xl={18}>
              <Card
                bordered={false}
                style={{
                  borderRadius: 24,
                  background: "#ffffff",
                  boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
                  textAlign: "center",
                }}
                bodyStyle={{ padding: "48px 40px" }}
              >
                <Space direction="vertical" size="large" align="center">
                  <div>
                    <Text
                      strong
                      style={{
                        color: ACCENT,
                        fontSize: 14,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                    >
                      Visi Kami
                    </Text>
                    <Title
                      level={2}
                      style={{
                        margin: "12px 0 0",
                        color: TEXT_PRIMARY,
                        fontFamily: "'Quicksand', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Mewujudkan Generasi Tangguh
                    </Title>
                  </div>

                  <Divider
                    style={{
                      margin: "8px 0",
                      minWidth: 60,
                      width: 60,
                      borderColor: ACCENT,
                      opacity: 0.3,
                    }}
                  />

                  <Paragraph
                    style={{
                      margin: 0,
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: TEXT_SECONDARY,
                      fontFamily: "'Quicksand', sans-serif",
                      maxWidth: 700,
                    }}
                  >
                    Mewujudkan generasi anak yang sadar dan siap menghadapi
                    bencana melalui pembelajaran interaktif berbasis teknologi
                    sejak usia dini.
                  </Paragraph>
                </Space>
              </Card>
            </Col>
          </Row>

          <Space
            direction="vertical"
            size="large"
            style={{ width: "100%", marginBottom: 80 }}
          >
            <Space
              direction="vertical"
              align="center"
              size="small"
              style={{ width: "100%" }}
            >
              <Text
                strong
                style={{
                  color: ACCENT,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Misi Kami
              </Text>
              <Title
                level={2}
                style={{
                  margin: 0,
                  color: TEXT_PRIMARY,
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Langkah-langkah Strategis
              </Title>
            </Space>

            <Row gutter={[24, 24]} justify="center">
              {DataMisi.map((item, index) => (
                <Col xs={24} sm={12} lg={8} key={index}>
                  <Card
                    bordered={false}
                    style={{
                      height: "100%",
                      borderRadius: 16,
                      background: "#ffffff",
                      boxShadow: "0 2px 12px rgba(0, 0, 0, 0.04)",
                      transition: "all 0.3s ease",
                    }}
                    bodyStyle={{ padding: 28 }}
                    hoverable
                  >
                    <Space direction="vertical" size="middle">
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 12,
                          background: `${ACCENT}15`,
                          color: ACCENT,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 20,
                        }}
                      >
                        {item.icon}
                      </div>
                      <Text
                        strong
                        style={{
                          fontSize: 16,
                          color: TEXT_PRIMARY,
                          fontFamily: "'Quicksand', sans-serif",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        Misi {index + 1}
                      </Text>
                      <Paragraph
                        style={{
                          margin: 0,
                          fontSize: 14,
                          lineHeight: 1.7,
                          color: TEXT_SECONDARY,
                          fontFamily: "'Quicksand', sans-serif",
                        }}
                      >
                        {item.text}
                      </Paragraph>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </Space>

          <Divider style={{ margin: "24px 0", opacity: 0.5 }} />

          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Title
              level={2}
              style={{
                textAlign: "center",
                margin: 0,
                color: TEXT_PRIMARY,
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 700,
              }}
            >
              Meet the Team
            </Title>

            <Space direction="vertical" size={48} style={{ width: "100%" }}>
              {data_image_team.map((val, i) => (
                <Space
                  key={`${val.kategori}-${i}`}
                  direction="vertical"
                  align="center"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <Title
                    level={4}
                    style={{
                      color: TEXT_PRIMARY,
                      fontFamily: "'Quicksand', sans-serif",
                      margin: 0,
                    }}
                  >
                    {val.kategori}
                  </Title>
                  <Flex wrap="wrap" justify="center" gap={24}>
                    {val.anggota.map((val2, i2) => (
                      <ProfileCard key={i2} anggota={val2} />
                    ))}
                  </Flex>
                </Space>
              ))}
            </Space>
          </Space>
        </main>

        <FooterSection2 />
      </Flex>
    </>
  );
}

export default About;
