const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Gantari", ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.125rem"],
      base: ["1rem", "1.25rem"],
      lg: ["1.125rem", "1.375rem"],
      xl: ["1.25rem", "1.5rem"],
      "2xl": ["1.5rem", "1.75rem"],
    },
    keyframes: {
      breathing: {
        "28.5%": { transform: "scale(2)", opacity: "100%" },
        "35.7%": { transform: "scale(2)", opacity: "100%" },
        "92.8%": { transform: "none", opacity: "50%" },
      },
    },
    extend: {},
  },
  plugins: [],
};
