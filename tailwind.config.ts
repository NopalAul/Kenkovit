import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    scale: {
      '101': '1.01',
      '105': '1.05',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      lg2: '0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      card: '5px 8  px 30px 3px rgba(0, 0, 0, 0.1)',
      card2: '3px 3px 4px 2px rgba(0, 0, 0, 0.1), -2px -2px 3px 2px rgba(255, 255, 255, 0.5)',
      card3: '6px 6px 10px 2px rgba(0, 0, 0, 0.1)',
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
        pink1: "#EC7FA2",
        pink2: "#FFE5EF",
        purple1: "#A82486",
        brown1: "#816479",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Arial", "sans-serif"],
      },
    },
  },
} satisfies Config;
