const defaultTheme = require("tailwindcss/defaultTheme");

const brandColors = {
  /* Primary: amber */
  primary: {
    500: "#ffc107",
    900: "#ff6f00",
    100: "#ffecb3",
    700: "#ffa000",
    300: "#ffd54f",
    800: "#ff8f00",
    600: "#ffb300",
    400: "#ffca28",
    200: "#ffe082",
  },
  /* Neutral: grey */
  neutral: {
    500: "#aebfcc",
    900: "#212a34",
    100: "#f8f9fa",
    700: "#6d7b89",
    300: "#d4dde5",
    800: "#404c5a",
    600: "#91a0b0",
    400: "#cbd4da",
    200: "#e1e7eb",
  },
  /* Accent Colors */
  /* -- Complementary: Indigo */
  accent: {
    500: "#2196f3",
    900: "#0d47a1",
    100: "#bbdefb",
    700: "#1976d2",
    300: "#64b5f6",
    800: "#1565c0",
    600: "#1e88e5",
    400: "#42a5f5",
    200: "#90caf9",
  },
  /* -- Error: Red */
  /* -- Success: Green */
  /* -- Warning: Yellow */
};

module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  darkMode: false,
  theme: {
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
        ...brandColors,
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
