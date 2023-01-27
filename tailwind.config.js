/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
      bebas: 'Bebas'
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sl: {'max': '400px'},
      sn: {'max': '300px'},
      ls: {'max': '1230px'},
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
      },
      backgroundImage: {
        room: "url('./assets/img/room.jpg')",
        creators: "url('../src/assets/creators.webp')"
      },
    },
  },
  plugins: [],
};