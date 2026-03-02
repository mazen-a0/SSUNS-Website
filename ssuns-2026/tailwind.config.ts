import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        brand: {
          navy: "var(--color-brand-navy)",
          blue: "var(--color-brand-blue)",
        },
        glass: {
          bg: "var(--glass-bg)",
          border: "var(--glass-border)",
          shadow: "var(--glass-shadow-color)",
        },
      },
      fontFamily: {
        sans: ["var(--font-chivo)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-market-fresh)", "var(--font-chivo)", "sans-serif"],
        accent: ["var(--font-petit-formal)", "cursive"],
      },
    },
  },
};

export default config;
