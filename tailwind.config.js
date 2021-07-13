const defaultTheme = require("tailwindcss/defaultTheme");
const fontSize = require("./src/theme/fontSize.json");
const brandTheme = require("./src/theme/colors/brandThemeNubank.json");

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
        },
      },
      backgroundColor: {
        skin: {
          fill: "var(--color-fill)",
          "fill-highlight": "var(--color-fill-highlight)",
          "fill-highlight-dark": "var(--color-fill-highlight-dark)",
          "fill-highlight-darker": "var(--color-fill-highlight-darker)",
        },
      },
      // ./Theming
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
