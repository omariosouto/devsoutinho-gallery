const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './modules/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './patterns/**/*.{js,ts,jsx,tsx}',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system, BlinkMacSystemFont, sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
