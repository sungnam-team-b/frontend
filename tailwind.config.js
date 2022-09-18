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
        h12: "80vh",
        h13: "70vh",
        h14: "8vh",
        h20: "20vw",
        header: "25vh",
        body: "50vh",
        footer: "25vh",
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
        w12: "35vw",
        w13: "72vw",
        w14: "6vw",
        w15: "7vw",
        w16: "10vw",
        w17: "15vw",
        w18: "7vw",
        w19: "10vw",
        w20: "20vw",
        w21: "10vw",
        w22: "10vw",
        w23: "10vw",
      },
      spacing: {
        loginspacing1: "4vh",
        loginspacing2: "1.5vw",
        spw: "55vw",
        sph: "65vh",
        sph2: "5vh",

        menuspacing: "2vh",
        menubuttonspacingt: "3vh",
        menubuttonspacingt2: "4vh",
        menubuttonspacingt3: "4.5vh",
        menubuttonspacing4: "13vh",

        buttonspacingt: "12vh",
        boxborder: "50vh",

        spc: "40vh",
        spcw: "60vw",

        ml1: "87vw",
        ml2: "70vw",

        footer: "70vh",

        Mt: "10vh",

        sps: "25vh",
        sps2: "70vh",

        spsr: "2vw",

        rt: "6vh",
        rl: "25vw",

        rb: "25vh",

        rt2: "23.5vh",

        mt1: "10vh",
        mt2: "10vw",
        mt3: "86vw",
        mt4: "40.5vw",
        mt5: "8vh",
      },
      colors: {
        mainblue: "#2C3342",
        mainorange: "#F99872",
        button1: "#558A42",
        button2: "#44A222",
        text1: "#F4DDB2",
      },
      backgroundImage: {},
      fontSize: {
        xxs: ".5rem",
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
  plugins: [require("@tailwindcss/aspect-ratio")],
};
