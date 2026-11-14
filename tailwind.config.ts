import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#f8fafc",
        glass: {
          surface: "rgba(255, 255, 255, 0.03)",
          surfaceHover: "rgba(255, 255, 255, 0.07)",
          border: "rgba(255, 255, 255, 0.08)",
          borderHighlight: "rgba(255, 255, 255, 0.18)",
          glow: "rgba(59, 130, 246, 0.15)",
        },
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          DEFAULT: "#3b82f6",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      backgroundImage: {
        "liquid-radial":
          "radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.18), transparent 60%)",
        "liquid-radial-cyan":
          "radial-gradient(circle at 100% 50%, rgba(6, 182, 212, 0.15), transparent 50%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "glass-gradient-hover":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)",
        "glass-border-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(59, 130, 246, 0.3) 100%)",
      },
      boxShadow: {
        "liquid-glass":
          "0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.4)",
        "liquid-glass-lg":
          "0 20px 50px 0 rgba(0, 0, 0, 0.6), inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 3px 0 rgba(0, 0, 0, 0.5)",
        "liquid-glow":
          "0 0 35px -5px rgba(59, 130, 246, 0.35), 0 0 15px -3px rgba(6, 182, 212, 0.25)",
        "liquid-glow-lg":
          "0 0 60px -10px rgba(59, 130, 246, 0.5), 0 0 30px -5px rgba(6, 182, 212, 0.4)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
