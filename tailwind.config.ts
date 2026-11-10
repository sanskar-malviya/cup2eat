import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1C3B2E",
        "forest-deep": "#122419",
        gold: "#C8A24B",
        "gold-soft": "#E3C879",
        cream: "#F5EEE1",
        "cream-dark": "#E8DCC4",
        cocoa: "#3A2317",
        leaf: "#4A7C59",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "rise-steam": {
          "0%": { opacity: "0", transform: "translateY(0) scale(1)" },
          "40%": { opacity: "0.5" },
          "100%": { opacity: "0", transform: "translateY(-60px) scale(1.6)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
