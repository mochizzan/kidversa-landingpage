import { Flex, Image, Tag } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import ImgHwFront from "../assets/images/hardware_front.png";
import ImgHwSide from "../assets/images/hardware_side.png";
import ImgHwBack from "../assets/images/hardware_back.png";
import ImgHwDisplayed from "../assets/images/hardware_front_displayed.png";

const ACCENT = "#4096ff";
const TEXT_PRIMARY = "#1a2332";
const TEXT_SECONDARY = "#556678";

const productImages = [
  { src: ImgHwFront, title: "Tampak Depan" },
  { src: ImgHwSide, title: "Tampak Samping" },
  { src: ImgHwBack, title: "Tampak Belakang" },
  { src: ImgHwDisplayed, title: "Tampilan Saat Aktif" },
];

const kontenFeatures = [
  "Animasi ramah anak",
  "6 Topik Bencana Alam",
  "Simulasi interaktif",
  "Evaluasi berbasis permainan",
];

const softwareFeatures = ["Dashboard monitoring pendidik", "Rapor Otomatis"];

function ProductSection() {
  const previewItems = productImages.map((img) => ({
    src: img.src,
    alt: img.title,
  }));

  return (
    <section
      style={{
        width: "100%",
        background: "#e2e8f0",
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
            Produk Kami
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
            Hardware interaktif dilengkapi konten edukasi kebencanaan dan
            software manajemen pendidikan yang terintegrasi.
          </Text>
        </Flex>

        <div
          style={{
            width: "100%",
            background: "#ffffff",
            borderRadius: 20,
            border: "1px solid rgba(0,0,0,0.06)",
            boxShadow: "0 6px 32px rgba(0, 0, 0, 0.07)",
            overflow: "hidden",
          }}
        >
          <Image.PreviewGroup items={previewItems}>
            <Flex
              className="product-images"
              gap={12}
              style={{ width: "100%", padding: "16px 16px 0" }}
            >
              {productImages.map((img, i) => (
                <div
                  key={i}
                  className="product-img-card"
                  style={{
                    flex: "1 1 0",
                    minWidth: 0,
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    borderRadius: 12,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      aspectRatio: "3 / 4",
                      objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    preview={{
                      mask: (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.5)",
                            padding: 16,
                          }}
                        >
                          <span
                            style={{
                              color: "#fff",
                              fontSize: 14,
                              fontWeight: 700,
                              fontFamily: "'Quicksand', sans-serif",
                              textAlign: "center",
                            }}
                          >
                            {img.title}
                          </span>
                        </div>
                      ),
                    }}
                  />
                </div>
              ))}
            </Flex>
          </Image.PreviewGroup>

          <div style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />

          <Flex
            className="product-feature-row"
            gap={32}
            justify="center"
            wrap
            style={{ padding: "24px 28px" }}
          >
            <Flex vertical gap={10} style={{ flex: "1 1 240px" }}>
              <Tag
                color="blue"
                style={{
                  width: "fit-content",
                  margin: 0,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "1px 10px",
                  borderRadius: 100,
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                KONTEN
              </Tag>
              {kontenFeatures.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  <span style={{ color: ACCENT, fontSize: 14, flexShrink: 0 }}>
                    ✓
                  </span>
                  {f}
                </div>
              ))}
            </Flex>

            <Flex vertical gap={10} style={{ flex: "1 1 240px" }}>
              <Tag
                color="purple"
                style={{
                  width: "fit-content",
                  margin: 0,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  padding: "1px 10px",
                  borderRadius: 100,
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                SOFTWARE
              </Tag>
              {softwareFeatures.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: TEXT_PRIMARY,
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  <span
                    style={{ color: "#722ed1", fontSize: 14, flexShrink: 0 }}
                  >
                    ✓
                  </span>
                  {f}
                </div>
              ))}
            </Flex>
          </Flex>
        </div>
      </Flex>

      <style>{`
        .product-img-card .ant-image {
          display: block !important;
          width: 100% !important;
        }

        @media (max-width: 768px) {
          .product-images {
            flex-wrap: wrap !important;
          }
          .product-images > * {
            flex: 1 1 calc(50% - 8px) !important;
            max-width: calc(50% - 8px) !important;
          }
        }
        @media (max-width: 480px) {
          .product-images > * {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ProductSection;
