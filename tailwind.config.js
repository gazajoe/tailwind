const colors=require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {

      colors:{
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,

      }
    },
  },
  plugins: [],
}

