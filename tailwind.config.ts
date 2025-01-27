import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink1: "#FF6FB7",
        pink2: "#FEE2F0",
        purple1: "#A82486",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
