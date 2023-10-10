/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./soundR.html"],
  theme: {
    extend: {
      colors:{
        'logo-main': '#317453',
        'black-opacity20': '#00000033',
        'black-opacity50': '#00000080',
        'castom-red': '#F91155',
        'castom-black': '#333333',
        'castom-gray': '#DDDDDD',
        'castom-grayDark': '#ADADAD',
      },
      fontSize:{
        'castom-H1': 48,
        'castom-H2': 40,
        'castom-H3': 36,
        'castom-H4': 32,
        'castom-p': 24,
        'castom-p-small': 18,
      },
      width:{
        'card-width': 300,
      },
      height:{
        'card-height': 500,
        'card-img-height': 268,
      },
    },
  },
  plugins: [],
}

