import type { Config } from "tailwindcss";

/**
 * Brand tokens are defined in app/globals.css via @theme (Tailwind v4).
 * This file documents the same palette for reference and tooling.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        ivory: "#FFFCF7",
        brass: "#C9A876",
        "brass-dark": "#A8895E",
        ink: "#5C4A3A",
        sage: "#DDE5D5",
        "sage-dark": "#A8B89A",
        muted: "#8B7B6A",
        forest: "#2F4030",
        "sand-warm": "#F5EBD9",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        outfit: ["var(--font-outfit)", "Helvetica Neue", "sans-serif"],
      },
    },
  },
};

export default config;
