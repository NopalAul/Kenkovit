import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    scale: {
      '101': '1.01',
      '105': '1.05',
    },
    boxShadow: {
      card: '0 20px 30px 3px rgba(0, 0, 0, 0.1)',
      card2: '-10px -10px 30px 3px rgba(219, 0, 0, 0.1)',
      // x y blur spread color
      cardCombined: '10px 10px 30px 1px rgba(0, 0, 0, 0.1), -10px -10px 25px 1px rgb(255, 255, 255)',
    },
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, #E0AA3E, #DCD689, #EDCE6A, #DCD689, #B88A44)',
      },
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
