/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.vue',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        zinc: {
          css: {
            '--tw-prose-pre-bg': 'transparent',
          }
        }
      })
    }, 
  },
  plugins: [require('@tailwindcss/typography')],
}
