const defaultTheme = require("tailwindcss/defaultTheme");
const fontSize = require("./src/theme/fontSize.json");
const brandTheme = require("./src/theme/colors/brandTheme.json");

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
          base: "var(--color-text-base)",
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
        },
      },
      // ./Theming

      /* Base Colors: https://material-ui.com/customization/color/ */
      /**
       - 500: Good for backgrounds
       - 900: Good for text
       - 100: Good for tint the background of an element
       */
      colors: {
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
