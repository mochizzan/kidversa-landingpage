import { Flex, Image } from "antd";
import { Navbar } from "../../components/navbar";

const TEXT_PRIMARY = "#1a2332";
const ACCENT = "#4096ff";

function GalleryItem({ img }) {
  return (
    <div
      className="gallery-item"
      style={{
        breakInside: "avoid",
        marginBottom: 16,
        borderRadius: 14,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        transition: "transform 0.3s ease",
      }}
    >
      <Image
        src={img.url}
        alt={img.title}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: 14,
          transition: "transform 0.4s ease",
          objectFit: "cover",
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
                background: "rgba(0, 0, 0, 0.55)",
                borderRadius: 14,
                padding: 20,
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: "'Quicksand', sans-serif",
                  textAlign: "center",
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                {img.title}
              </span>
            </div>
          ),
        }}
      />
    </div>
  );
}

function Galeri({ gallery_url }) {
  const previewItems = gallery_url.map((img) => ({
    src: img.url,
    alt: img.title,
  }));

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
      <div
        style={{
          position: "absolute",
          top: 60,
          left: -140,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(64,150,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: -100,
          width: 380,
          height: 380,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Navbar />

      <main
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          padding: "120px 24px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
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
          Galeri <span style={{ color: ACCENT }}>Kidversa</span>
        </h1>

        <Image.PreviewGroup items={previewItems}>
          <div
            className="gallery-masonry"
            style={{
              columnCount: 3,
              columnGap: 16,
              width: "100%",
            }}
          >
            {gallery_url.map((img, i) => (
              <GalleryItem key={`${i}-${img.title}`} img={img} />
            ))}
          </div>
        </Image.PreviewGroup>
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

      <style>{`
        .gallery-item:hover {
          transform: translateY(-2px);
        }
        .gallery-item:hover .ant-image img {
          transform: scale(1.03);
        }

        .ant-image {
          display: block !important;
          width: 100% !important;
        }

        @media (max-width: 900px) {
          .gallery-masonry {
            column-count: 2 !important;
          }
        }
        @media (max-width: 520px) {
          .gallery-masonry {
            column-count: 1 !important;
          }
        }
      `}</style>
    </Flex>
  );
}

export default Galeri;
