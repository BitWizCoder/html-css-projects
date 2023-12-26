/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bigShouldersDisplay: ["Big Shoulders Display", "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// font-family: 'Big Shoulders Display', sans-serif;
// font-family: 'Lexend Deca', sans-serif;
