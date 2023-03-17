/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        completed: colors.green,
        red: colors.red,
        // primary: {
        //   light: '#D0E8F9',
        //   DEFAULT: '#9ACCF1',
        //   medium: '#3A9CE4',
        //   dark: '#1667A3',
        // },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
