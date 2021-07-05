const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
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
