/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      height: { he: "6vw" },
      width: {},
      spacing: {},
      colors: { "regal-blue": "#243c5a" },
    },
  },
  plugins: [],
};
