const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      sans: ["Gantari", ...defaultTheme.fontFamily.sans],
      mono: [...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      base: ["1rem", "1.375rem"],
      lg: ["1.125rem", "1.5rem"],
      xl: ["1.25rem", "1.625rem"],
      "2xl": ["1.5rem", "1.875rem"],
    },
    keyframes: {
      breathing: {
        "28.5%, 35.7%": { transform: "scale(2)" },
        "92.8%": { transform: "none" },
      },
    },
    extend: {},
  },
  plugins: [],
};
