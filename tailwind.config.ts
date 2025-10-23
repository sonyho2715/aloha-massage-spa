import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B9D83", // Sage green
          light: "#A4B59A",
          dark: "#6B7A63",
        },
        accent: {
          DEFAULT: "#E8A598", // Soft coral
          light: "#F2BCB1",
          dark: "#DE8E7F",
        },
        cream: "#FAF8F5",
        taupe: "#C9B8A3",
        gold: "#D4AF37",
      },
      fontFamily: {
        sans: ["var(--font-lora)", "serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
