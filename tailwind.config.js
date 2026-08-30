/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      colors: {
        glass: {
          light: "rgba(255, 255, 255, 0.15)",
          medium: "rgba(255, 255, 255, 0.25)",
          dark: "rgba(16, 16, 16, 0.3)",
          darker: "rgba(8, 8, 8, 0.4)",
        },
        border: "rgba(255, 255, 255, 0.2)",
        accent: {
          appleBlue: "#06B6D4",
          applePurple: "#A78BF A",
          appleCyan: "#5FC8AA",
        },
        bg: {
          light: "#F8FAFC",
          dark: "#080808",
          card: "#101010",
        },
        text: {
          light: "#1E293B",
          dark: "#F1F5F9",
          muted: "#64748B",
        },
        glassAccent: "rgba(6, 182, 212, 0.15)",
      },
      fontFamily: {
        display: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 4px 20px rgba(0, 0, 0, 0.3)",
        glow: "0 0 20px rgba(6, 182, 212, 0.15)",
      },
      borderRadius: {
        lg: "calc(var(--radius) + 4px)",
        md: "calc(var(--radius) + 2px)",
        sm: "calc(var(--radius))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-height)" },
          to: { height: 0 },
        },
        "caret-blink": {
          "0%, 70%, 100%": { opacity: "1" },
          "20%, 50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}