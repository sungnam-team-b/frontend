/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: { h1: "100vh" },
      width: { w1: "100vw" },
      spacing: {},
      colors: { "regal-blue": "#243c5a" },
      backgroundImage: {},
    },
  },
  plugins: [],
};
