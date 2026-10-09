import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const HERO_STATS = [
  { top: "Data Vault 2.0", bottom: "Specialist", style: { top: 30, left: -10 } },
  { top: "M.Eng. AI", bottom: "Autonomous Systems", style: { top: 220, right: -20 } },
  { top: "Munich", bottom: "Germany · Remote-friendly", style: { bottom: -20, left: 30 } },
];

export default async function Image() {
  const photoData = await readFile(join(process.cwd(), "public", "portrait.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 50,
          padding: "60px 70px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(56,189,248,0.3), transparent 50%), radial-gradient(circle at 85% 80%, rgba(168,85,247,0.3), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: copy */}
        <div style={{ display: "flex", flexDirection: "column", width: 600, flexShrink: 0 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              color: "#38bdf8",
              fontSize: 18,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#34d399" }} />
            Platform Data Engineer @ Enmacc GmbH
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "white", marginTop: 28, lineHeight: 1.15 }}>
            Hi, this is Faris Hussain
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#d4d4d4", marginTop: 22, lineHeight: 1.5 }}>
            Data platforms and agentic AI systems — Data Vault 2.0 to
            autonomous trading agents in production.
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
            <div
              style={{
                display: "flex",
                padding: "14px 28px",
                borderRadius: 999,
                background: "#0ea5e9",
                color: "white",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Book a call
            </div>
            <div
              style={{
                display: "flex",
                padding: "14px 28px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.25)",
                color: "white",
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              See what I can do
            </div>
          </div>
        </div>

        {/* Right: photo card with floating badges */}
        <div style={{ display: "flex", position: "relative", width: 410, height: 410, flexShrink: 0 }}>
          <img
            src={photoSrc}
            alt="Faris Hussain"
            width={410}
            height={410}
            style={{
              borderRadius: 40,
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          {HERO_STATS.map((stat) => (
            <div
              key={stat.top}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "absolute",
                ...stat.style,
                padding: "12px 18px",
                borderRadius: 16,
                background: "rgba(23,23,23,0.92)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ display: "flex", fontSize: 22, fontWeight: 700, color: "#38bdf8" }}>{stat.top}</div>
              <div style={{ display: "flex", fontSize: 16, color: "#d4d4d4" }}>{stat.bottom}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
