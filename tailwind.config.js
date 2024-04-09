/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.125rem"],
      base: ["1rem", "1.25rem"],
      lg: ["1.125rem", "1.375rem"],
      xl: ["1.25rem", "1.5rem"],
      "2xl": ["1.5rem", "1.75rem"],
      "3xl": ["1.875rem", "2.125rem"],
      "4xl": ["2.25rem", "2.5rem"],
    },
    extend: {},
  },
  plugins: [],
};
