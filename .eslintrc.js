module.exports = {
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    jest: true,
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      env: {
        jest: true,
      },
      // eslint-disable-next-line global-require
      ...require('eslint-plugin-jest').configs.recommended,
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
  },
};
