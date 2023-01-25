/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003049",
        secondary: "#d62828",
        tertiary: "#f77f00",
        optional: "#fcbf49",
      },
    },
  },
  plugins: [],
};
