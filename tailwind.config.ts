import type { Config } from "tailwindcss";

/**
 * Centrale visuele configuratie.
 * Pas hier het kleurenpalet, de typografie en de ritmes aan.
 * De kleuren sluiten aan bij de rustige, aardse uitstraling van Atlanticasa:
 * zand, crème, donkerbruin en aardetinten. Geen glanzend goud.
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Achtergronden
        cream: {
          DEFAULT: "#FAF7F1",
          50: "#FCFAF6",
          100: "#F6F1E8",
        },
        // Zandtinten
        sand: {
          50: "#F4EEE3",
          100: "#EBE2D2",
          200: "#DED0B9",
          300: "#CDB99A",
          400: "#B99E78",
          500: "#A5855D",
        },
        // Klei / aardse accent (subtiel, niet schreeuwerig)
        clay: {
          DEFAULT: "#9A6A45",
          light: "#B08862",
          dark: "#7C5436",
        },
        // Diep bruin voor donkere secties
        umber: {
          DEFAULT: "#2A231C",
          light: "#3A3128",
          dark: "#1E1913",
        },
        // Tekst
        ink: {
          DEFAULT: "#241F18",
          soft: "#4A4237",
          muted: "#736A5C",
        },
        line: "#DED4C3",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.9rem, 3.5vw, 2.85rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.15" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "78rem",
        prose2: "42rem",
      },
      spacing: {
        section: "clamp(4.5rem, 10vw, 9rem)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
