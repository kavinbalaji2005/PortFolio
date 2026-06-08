/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Space Grotesk",
          "Plus Jakarta Sans",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        background: "#050505",
        surface: "#111113",
        "surface-hover": "var(--color-surface-hover)",
        "surface-active": "var(--color-surface-active)",
        border: "var(--color-border)",
        "border-hover": "var(--color-border-hover)",
        primary: "#2997ff",
        secondary: "#30d158",
        accent: "#bf5af2",
        text: {
          primary: "#f5f5f7",
          secondary: "#86868b",
        },
      },
      boxShadow: {
        "glow-primary":
          "0 0 30px rgba(41, 151, 255, 0.25), 0 0 60px rgba(41, 151, 255, 0.1)",
        "glow-accent":
          "0 0 30px rgba(191, 90, 242, 0.25), 0 0 60px rgba(191, 90, 242, 0.1)",
        "glow-secondary":
          "0 0 30px rgba(48, 209, 88, 0.25), 0 0 60px rgba(48, 209, 88, 0.1)",
        "glow-white":
          "0 0 30px rgba(255, 255, 255, 0.15), 0 0 60px rgba(255, 255, 255, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.02)" },
        },
        orbit: {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(30px, -20px) rotate(90deg)" },
          "50%": { transform: "translate(0, -40px) rotate(180deg)" },
          "75%": { transform: "translate(-30px, -20px) rotate(270deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
