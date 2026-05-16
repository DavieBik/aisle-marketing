import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Aisle App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAF7F2",
          padding: 80,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "1px solid #DDE5D5",
            opacity: 0.6,
          }}
        />
        <p
          style={{
            fontSize: 28,
            color: "#C9A876",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          The Aisle App
        </p>
        <p
          style={{
            fontSize: 64,
            color: "#5C4A3A",
            textAlign: "center",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          A wedding, beautifully kept.
        </p>
      </div>
    ),
    { ...size }
  );
}
