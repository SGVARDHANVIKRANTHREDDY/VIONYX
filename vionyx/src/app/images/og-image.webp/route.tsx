import { ImageResponse } from "next/og";
import { businessConfig } from "@/config/business";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#020617",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ color: "#38bdf8", fontSize: 36, fontWeight: 700, letterSpacing: 8 }}>
          {businessConfig.name}
        </div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 28, maxWidth: 900 }}>
          Premium Digital Experiences for Growing Businesses
        </div>
        <div style={{ color: "#d8e2f1", fontSize: 30, lineHeight: 1.35, marginTop: 32, maxWidth: 860 }}>
          Production-grade web design, engineering, SEO, and conversion systems for ambitious local brands.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
