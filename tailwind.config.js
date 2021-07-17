/* eslint-disable prettier/prettier */
const defaultTheme = require("tailwindcss/defaultTheme");
const fontSize = require("./src/theme/fontSize.json");
// const brandTheme = require("./src/theme/colors/brandThemeBlueCyan.json");
// const brandTheme = require("./src/theme/colors/brandThemeNubank.json");
const brandTheme = require("./src/theme/colors/brandThemeDevSoutinho.json");

const accentColors = require("./src/theme/colors/defaults/accentColors.json");

const backgrounds = [
  "color-fill-base",
  "color-fill-dark",
  "color-fill",
  "color-fill-highlight",
  "color-fill-accent",
];

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false,
  theme: {
    fontSize,
    extend: {
      fontFamily: {
        sans: [
          "-apple-system, BlinkMacSystemFont, sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      // Theming
      textColor: {
        skin: {
          ...backgrounds.reduce((acc, currentBackground) => {
            return {
              ...acc,
              [`${currentBackground.replace('color-', '')}-color-contrast`]: `var(--${currentBackground}-color-contrast)`,
              [`${currentBackground.replace('color-', '')}-color-contrast-strong`]: `var(--${currentBackground}-color-contrast-strong)`,
              [`${currentBackground.replace('color-', '')}-color-contrast-light`]: `var(--${currentBackground}-color-contrast-light)`,
              [`${currentBackground.replace('color-', '')}-color-highlight`]: `var(--${currentBackground}-color-highlight)`,
              [`${currentBackground.replace('color-', '')}-color-highlight-strong`]: `var(--${currentBackground}-color-highlight-strong)`,
              [`${currentBackground.replace('color-', '')}-color-highlight-light`]: `var(--${currentBackground}-color-highlight-light)`,
            }
          }, {}),
        },
      },
      backgroundColor: {
        skin: {
          ...backgrounds.reduce((acc, currentBackground) => {
            return {
              ...acc,
              [currentBackground.replace('color-', '')]: `var(--${currentBackground})`,  
              [`${currentBackground.replace('color-', '')}-strong`]: `var(--${currentBackground}-strong)`,  
              [`${currentBackground.replace('color-', '')}-stronger`]: `var(--${currentBackground}-stronger)`,  
            }
          }, {}),
        },
      },
      // ./Theming
      colors: {
        ...accentColors,
        ...brandTheme,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
