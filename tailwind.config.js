/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          1: '#FF59FB',
          2: '#9513FF',
        },
        bg: '#685ABB',
      },
      fontFamily: {
        tektur: ['Tektur', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        londrina: ['"Londrina Solid"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
