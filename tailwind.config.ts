import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      inset: {
        "1/2": "50%",
        "2/5": "40%",
        full: "100%",
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        primary: {
          default: "#4763b7",
          50: "#e9ecf6",
          100: "#c8d0e9",
          200: "#a5b2da",
          300: "#8193ca",
          400: "#657abf",
          500: "#4763b7",
          600: "#405aad",
          700: "#3750a1",
          800: "#2e4695",
          900: "#203481",
        },
        secondary: {
          default: "#204341",
          100: "#90A1A0",
          200: "#829594",
          300: "#748A88",
          400: "#667E7C",
          500: "#587271",
          600: "#4A6665",
          700: "#3C5B59",
          800: "#2E4F4D",
          900: "#204341",
        },
        blue: {
          default: "#2460DA",
          100: "#F3F9FF",
          200: "#769CE8",
          300: "#5B88E3",
          400: "#3F74DF",
          500: "#2460DA",
          600: "#2054BF",
          700: "#1B48A4",
          800: "#173C88",
          900: "#12306D",
        },
        "main-btn-color": "#1D539F",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        custom: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        tileIn: {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out both",
        "tile-in": "tileIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["active"],
    },
  },
  plugins: [],
};
export default config;
