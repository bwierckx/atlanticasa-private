import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Dynamisch gegenereerde Open Graph-afbeelding in de huisstijlkleuren.
 * Vervang desgewenst door een redactionele foto van 1200×630 px.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #2A231C 0%, #3A3128 55%, #7C5436 100%)",
          color: "#FAF7F1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: "#DED0B9" }}>
          Besloten netwerk · Portugal &amp; Spanje
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, maxWidth: 900 }}>
            Vastgoedkansen die niet voor iedereen bedoeld zijn.
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#EBE2D2" }}>
            {siteConfig.name}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
