import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        primary: "#8B6F47",
        "primary-dark": "#5C4A2E",
        "primary-light": "#C4A97D",
        accent: "#D4A853",
        "bg-cream": "#FAF7F2",
        "bg-beige": "#F0EBE1",
        "text-brown": "#2C2118",
        "text-warm": "#6B5E50",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-playfair)", ...defaultTheme.fontFamily.serif],
        stock: [defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
