/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        h1: "100vh",
        guestloginh1: "7vh",

        h2: "50vh",
        h3: "70vh",
        h4: "50vh",
        h5: "20vh",
        h6: "30vw",
      },
      width: {
        w1: "50vw",
        guestloginw1: "25.6vw",
        w2: "50vw",
        w3: "70vw",
        w4: "50vw",
        w5: "15vw",
        w6: "30vw",
      },
      spacing: {
        loginspacing1: "8vh",
        loginspacing2: "1.5vw",
        spw: "55vw",
        sph: "60vh",
        sph2: "5vh",

        spc: "30vh",
        spcw: "60vw",

        ml1: "87vw",
        ml2: "70vw",

        Mt: "10vh",
      },
      colors: { mainblue: "#2C3342", mainorange: "#F99872" },
      backgroundImage: {},
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",

        maint1medium: "2rem",
        maint2medium: "2.8rem",
        maint3small: "1.5rem",
        maint4small: "2.2rem",
        maint5: "1.0rem",
        maint6: "1.7rem",
        main2xl1: "2.3rem",
        main2xl2: "3.0rem",
      },
    },
  },
  plugins: [],
};
