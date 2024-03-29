module.exports = {
  env: {
    es2021: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['@typescript-eslint', 'eslint-plugin-import-helpers'],

  extends: ['standard', 'plugin:prettier/recommended'],

  rules: {
    'no-undef': 'off',
    'no-new': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: ['absolute', 'module', '/^@/', 'index'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
}
