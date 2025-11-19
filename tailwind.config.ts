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
        // Primary - Hawaiian Ocean & Tropical Waters
        'ocean-blue': {
          DEFAULT: '#0077BE',
          light: '#3AA0D8',
          dark: '#005A92',
        },
        teal: {
          DEFAULT: '#008B8B',
          light: '#20B2AA',
          dark: '#006666',
        },
        sage: {
          DEFAULT: '#88B04B',
          light: '#A8C97F',
          dark: '#6B8E3C',
        },
        // Accent - Tropical Warmth
        coral: {
          DEFAULT: '#FF6F61',
          light: '#FF9B8E',
          dark: '#E5564A',
        },
        sand: {
          DEFAULT: '#F4E4C1',
          light: '#FFF8E7',
          dark: '#D9C9A3',
        },
        plumeria: {
          DEFAULT: '#FFE5E8',
          light: '#FFF5F7',
          dark: '#FFD1D6',
        },
        // Neutrals
        charcoal: {
          DEFAULT: '#2C3E50',
          light: '#34495E',
          dark: '#1A252F',
        },
        'warm-white': {
          DEFAULT: '#FFF8F0',
          light: '#FFFCF7',
          dark: '#F5EBE0',
        },
        stone: {
          DEFAULT: '#A39B8B',
          light: '#C4BDB0',
          dark: '#847C6D',
        },
        // Luxury Accent
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8941F',
        },
        // Legacy colors for backward compatibility
        primary: {
          DEFAULT: "#0077BE",
          light: "#3AA0D8",
          dark: "#005A92",
        },
        accent: {
          DEFAULT: "#FF6F61",
          light: "#FF9B8E",
          dark: "#E5564A",
        },
        cream: "#FFF8F0",
        taupe: "#A39B8B",
      },
      fontFamily: {
        sans: ["var(--font-lora)", "serif"],
        heading: ["var(--font-playfair)", "serif"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 12px 48px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 40px rgba(255, 111, 97, 0.3)',
        'glow-teal': '0 0 40px rgba(0, 139, 139, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.15)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 111, 97, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 111, 97, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
