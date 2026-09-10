/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#12141C",
        paper: "#F1EFEA",
        paperdark: "#0E1015",
        signal: "#3355FF",
        signaldark: "#7C93FF",
        mint: "#7CE0C6",
        muted: "#6B6F76",
        mutedd: "#9A9DA6",
        line: "#DAD7CE",
        lined: "#262A36",
        surface: "#E9E6DD",
        surfaced: "#171A22",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
