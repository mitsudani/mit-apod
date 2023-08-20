/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    extend: {},
    colors: {
      lilac: "#a296ca",
      violet: "#2b1d5a",
      greyish: "#54526a",
      blue: "#282b75",
      purple: "#4c1c46",
      white: "#ffffff",
      dark: "#1d161e",
      lightblue: "#9eadcf",
    },
    fontFamily: {
      sans: ["Raleway", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
