import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      keyframes: {
        "bounce-tap": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "card-enter": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "bounce-tap": "bounce-tap 200ms ease-in-out",
        "card-enter": "card-enter 300ms ease-out",
        "fade-in": "fade-in 300ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
