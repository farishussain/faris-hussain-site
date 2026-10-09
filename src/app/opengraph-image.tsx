import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.35), transparent 50%), radial-gradient(circle at 80% 80%, rgba(168,85,247,0.35), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={photoSrc}
          alt="Faris Hussain"
          width={140}
          height={140}
          style={{
            borderRadius: 70,
            objectFit: "cover",
            marginBottom: 36,
            border: "3px solid rgba(255,255,255,0.2)",
          }}
        />
        <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "white" }}>
          Faris Hussain
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a3a3a3", marginTop: 14 }}>
          Data &amp; AI Platform Engineer
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 32,
          }}
        >
          {["Data Vault 2.0", "Agentic AI", "Munich, Germany"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#d4d4d4",
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
