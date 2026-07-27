import type { Config } from "tailwindcss";

const config: Config = {
 content: [
 "./components/**/*.{js,ts,jsx,tsx,mdx}",
 "./app/**/*.{js,ts,jsx,tsx,mdx}",
 "./container/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
 extend: {
 colors: {
 brand: {
 blue: "#0033CC",
 navy: "#0033CC",
 deep: "#001A66",
 },
 },
 fontFamily: {
 sans: ["Inter", "sans-serif"],
 mono: ["Space Mono", "monospace"],
 display: ["Oswald", "sans-serif"],
 },
 borderRadius: {
 none: '0',
 sm: '0',
 DEFAULT: '0',
 md: '0',
 lg: '0',
 xl: '0',
 '2xl': '0',
 '3xl': '0',
 full: '0',
 },
 boxShadow: {
 brutal: "4px 4px 0px 0px #0033CC",
 "brutal-sm": "2px 2px 0px 0px #0033CC",
 "brutal-lg": "8px 8px 0px 0px #0033CC",
 glass: "none",
 "glass-sm": "none",
 "glow-blue": "none",
 "glow-cyan": "none",
 },
 keyframes: {
 fadeUp: {
 "0%": { opacity: "0", transform: "translateY(20px)" },
 "100%": { opacity: "1", transform: "translateY(0)" },
 },
 },
 animation: {
 "fade-up": "fadeUp 0.6s ease-out forwards",
 },
 },
 },
 plugins: [],
};
export default config;
