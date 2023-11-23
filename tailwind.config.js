/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#18d1b0',
        'gray01': '#151516',
        'gray02': '#6B6B6B',
        'gray03': '#0b0b0c',
        'gray04': '#101111',
        'black-overlay':'rgba(36, 38, 39, 0.6)',
      },
      fontFamily: {
        code: ['Source Code Pro'],
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
}

