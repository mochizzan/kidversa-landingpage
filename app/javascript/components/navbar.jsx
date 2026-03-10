import { useEffect, useState } from "react";
import logo from "../assets/images/nino_ngintip.png";
import { Link } from "@inertiajs/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLight = scrolled;

  return (
    <nav
      className="kidversa-nav"
      style={{
        maxWidth: isLight ? 520 : 480,
        width: "calc(100% - 32px)",
        position: "fixed",
        top: isLight ? 16 : 24,
        zIndex: 999,
        borderRadius: isLight ? 16 : 20,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        backdropFilter: "blur(16px) saturate(1.4)",
        WebkitBackdropFilter: "blur(16px) saturate(1.4)",
        background: isLight
          ? "rgba(255, 255, 255, 0.72)"
          : "rgba(0, 0, 0, 0.35)",
        border: isLight
          ? "1px solid rgba(255, 255, 255, 0.6)"
          : "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: isLight
          ? "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)"
          : "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        color: isLight ? "#1a2332" : "#ffffffd9",
      }}
    >
      <ul
        className="kidversa-nav-list"
        style={{
          display: "flex",
          flexDirection: "row",
          listStyleType: "none",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 0,
          padding: "8px 48px",
          backgroundColor: "transparent",
        }}
      >
        <li>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Quicksand', sans-serif",
              transition: "opacity 0.2s ease",
            }}
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Quicksand', sans-serif",
              transition: "opacity 0.2s ease",
            }}
            href={"/about"}
          >
            About
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <img
              src={logo}
              className="kidversa-nav-logo"
              style={{
                width: 48,
                height: "auto",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Quicksand', sans-serif",
              transition: "opacity 0.2s ease",
            }}
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "'Quicksand', sans-serif",
              transition: "opacity 0.2s ease",
            }}
            href={"/galeri"}
          >
            Galeri
          </Link>
        </li>
      </ul>
      <style>{`
        @media (max-width: 600px) {
          .kidversa-nav-list {
            padding: 6px 16px !important;
            gap: 4px;
          }
          .kidversa-nav-logo {
            width: 36px !important;
          }
        }
      `}</style>
    </nav>
  );
}
