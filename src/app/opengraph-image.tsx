import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Faris Hussain | Data & ML Platforms for AI Systems";

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
          gap: 48,
          padding: 64,
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(56,189,248,0.3), transparent 50%), radial-gradient(circle at 85% 80%, rgba(168,85,247,0.3), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 624, flexShrink: 0 }}>
          <div
            style={{
              display: "flex",
              color: "#d4d4d4",
              fontSize: 32,
              fontWeight: 600,
              marginBottom: 28,
            }}
          >
            Faris Hussain
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: -1.5,
            }}
          >
            <div style={{ display: "flex" }}>Modern Data &amp; ML</div>
            <div style={{ display: "flex" }}>platforms for</div>
            <div
              style={{
                display: "flex",
                backgroundImage: "linear-gradient(90deg, #38bdf8, #c084fc)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI systems
            </div>
          </div>
        </div>

        <div style={{ display: "flex", width: 400, height: 440, flexShrink: 0 }}>
          <img
            src={photoSrc}
            alt="Faris Hussain"
            width={400}
            height={440}
            style={{
              borderRadius: 32,
              objectFit: "cover",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
