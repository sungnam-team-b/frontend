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
        h7: "20vh",
        h8: "10vh",
        h9: "15vh",
        h10: "7vh",
      },
      width: {
        w1: "100vw",
        guestloginw1: "25.6vw",
        w2: "50vw",
        w3: "70vw",
        w4: "50vw",
        w5: "19vw",
        w6: "30vw",
        w7: "20vw",
        w8: "100vw",
        w9: "18vw",
        w10: "8vw",
        w11: "25vw",
      },
      spacing: {
        loginspacing1: "4vh",
        loginspacing2: "1.5vw",
        spw: "55vw",
        sph: "65vh",
        sph2: "5vh",

        spc: "40vh",
        spcw: "60vw",

        ml1: "87vw",
        ml2: "70vw",

        footer: "70vh",

        Mt: "10vh",

        sps: "25vh",
        sps2: "70vh",

        spsr: "2vw",
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
