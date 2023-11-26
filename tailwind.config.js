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
        'gray02': '#8a8a8b',
        'gray03': '#0b0b0c',
        'black-overlay':'rgba(36, 38, 39, 0.6)',
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
}

