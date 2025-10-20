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
          DEFAULT: "#1e3a8a", // Deep blue
          light: "#3b82f6",
          dark: "#1e40af",
        },
        accent: {
          DEFAULT: "#60a5fa", // Light blue
          light: "#93c5fd",
          dark: "#2563eb",
        },
      },
    },
  },
  plugins: [],
};
export default config;
