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
          "text-contrast-fill-highlight": "var(--text-contrast-fill-highlight)",
          "text-contrast-fill": "var(--text-contrast-fill)",
          "text-light": "var(--color-text-light)",
          "text-medium": "var(--color-text-medium)",
          "text-strong": "var(--color-text-strong)",
          "text-fill": "var(--color-text-fill)",
          "text-fill-highlight": "var(--color-text-fill-highlight)",
          "text-fill-highlight-dark": "var(--color-text-fill-highlight-dark)",
          "text-fill-highlight-darker":
            "var(--color-text-fill-highlight-darker)",
          // Button
          ...["default", "highlight", "accent"].reduce((acc, item) => {
            return {
              ...acc,
              [`text-button-primary-${item}`]: `var(--color-button-primary-${item}-color)`,
              [`text-button-primary-${item}-hover`]: `var(--color-button-primary-${item}-color-hover)`,
            };
          }, {}),
          ...["default", "highlight", "accent"].reduce((acc, item) => {
            return {
              ...acc,
              [`text-button-secondary-${item}`]: `var(--color-button-secondary-${item}-color)`,
              [`text-button-secondary-${item}-hover`]: `var(--color-button-secondary-${item}-color-hover)`,
            };
          }, {}),
          ...["default", "highlight", "accent"].reduce((acc, item) => {
            return {
              ...acc,
              [`text-button-tertiary-${item}`]: `var(--color-button-tertiary-${item}-color)`,
              [`text-button-tertiary-${item}-hover`]: `var(--color-button-tertiary-${item}-color-hover)`,
            };
          }, {}),
          // =========
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-highlight": "var(--color-fill-highlight)",
          "fill-highlight-dark": "var(--color-fill-highlight-dark)",
          "fill-highlight-darker": "var(--color-fill-highlight-darker)",
          // Button
          // Button
          ...["default", "highlight", "accent"].reduce((acc, item) => {
            return {
              ...acc,
              [`fill-button-primary-${item}`]: `var(--color-button-primary-${item}-background)`,
              [`fill-button-primary-${item}-hover`]: `var(--color-button-primary-${item}-background-hover)`,
            };
          }, {}),
          ...["default", "highlight", "accent"].reduce((acc, item) => {
            return {
              ...acc,
              [`fill-button-secondary-${item}`]: `var(--color-button-secondary-${item}-background)`,
              [`fill-button-secondary-${item}-hover`]: `var(--color-button-secondary-${item}-background-hover)`,
            };
          }, {}),
          ...["default", "highlight", "accent"].reduce((acc, item) => {
            return {
              ...acc,
              [`fill-button-tertiary-${item}`]: `var(--color-button-tertiary-${item}-background)`,
              [`fill-button-tertiary-${item}-hover`]: `var(--color-button-tertiary-${item}-background-hover)`,
            };
          }, {}),
          // =========
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
