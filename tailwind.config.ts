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
          DEFAULT: "#2d5f4f", // Green spa color
          light: "#3d7f6f",
          dark: "#1d4f3f",
        },
        accent: {
          DEFAULT: "#8fbc8f", // Light green
          light: "#a8d5a8",
          dark: "#6f9c6f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
