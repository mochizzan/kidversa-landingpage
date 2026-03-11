import Text from "antd/es/typography/Text";

export function FooterSection2() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "32px 24px",
        marginTop: "auto",
        textAlign: "center",
        borderTop: "1px solid #e8ecf2",
        background: "#ffffff",
      }}
    >
      <Text
        style={{
          fontSize: 13,
          color: "#94a3b8",
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        © 2026 Kidversa. All rights reserved.
      </Text>
    </footer>
  );
}
