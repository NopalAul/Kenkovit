import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      card: '0 20px 30px 3px rgba(0, 0, 0, 0.1)',
      card2: '-10px -10px 30px 3px rgba(219, 0, 0, 0.1)',
      // x y blur spread color
      cardCombined: '10px 10px 30px 1px rgba(0, 0, 0, 0.1), -10px -10px 25px 1px rgb(255, 255, 255)',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
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
