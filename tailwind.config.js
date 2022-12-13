/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.vue',
    './styles/**/*.css'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
