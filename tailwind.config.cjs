/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'headerBG':'url(./src/assets/02.jpg)',
        'home1':'url(./src/assets/01.jpg)',
      },
      boxShadow:{
        'header':' inset 0px 0px 169px 48px rgba(0,0,0,0.97)',
        'img':' inset 0px 0px 70px 20px rgba(0,0,0,0.97)',
        'carousel-img':'-26px -25px 0px 0px #b9b9b9',
        'carousel-item':'10px 10px 10px -5px #a8a8a8',

      },
      colors:{
        'semi-transparent':'rgba(250,250,250,0.9)',
        'green-accent':'rgba(0,79,3,0.5)',
        'low-opacity':'rgba(0,0,0,0.1)',
        'header-overlay':'rgba(0,0,0,0.35)',
        'medium-opacity':'rgba(0,0,0,0.5)',

      },
      fontFamily:{
        tommyThin:["MadeTommyThin", "cursive"],
        tommyRegular:["MadeTommyRegular", "cursive"],
        tommyMedium:["MadeTommyMedium", "cursive"],
        tommyBold:["MadeTommyBold", "cursive"],
        tommyExtra:["MadeTommyExtraBold", "cursive"],
        poppins:['Poppins', 'sans-serif']

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

