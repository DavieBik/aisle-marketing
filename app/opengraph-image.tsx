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
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 8,
            marginBottom: 24,
            fontStyle: "italic",
            color: "#A8895E",
          }}
        >
          <span style={{ fontSize: 28 }}>The</span>
          <span style={{ fontSize: 48, lineHeight: 1 }}>Aisle</span>
          <span style={{ fontSize: 28 }}>App</span>
        </div>
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
