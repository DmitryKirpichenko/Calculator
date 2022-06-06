module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
  },
};
