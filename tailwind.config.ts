import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white2: "#F5F5F5",
        pink1: "#FF6FB7",
        pink2: "#FEE2F0",
        purple1: "#A82486",
        brown1: "#816479",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
