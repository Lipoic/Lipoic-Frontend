module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // var is forbidden
    'no-var': 'error',

    // Use interface first
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // prettier warn
    'prettier/prettier': ['warn', { endOfLine: 'auto' }],

    // Remove unnecessary class newlines
    'lines-between-class-members': 'off',

    // https://eslint.org/docs/rules/default-case
    'default-case': 'off',

    // https://eslint.org/docs/rules/no-use-before-define
    'no-use-before-define': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md
    'no-shadow': 'off',
    // TODO: enable this rule
    '@typescript-eslint/no-shadow': 'off',

    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],

    // use bit (|, &)
    'no-bitwise': 'off',

    // import
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    // no-unused-vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // in vue no-unused-vars white list `_`
    'vue/no-unused-vars': ['error', { ignorePattern: '^_' }],

    // use void
    'no-void': 'off',

    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'except-parens'],

    // https://eslint.org/docs/rules/no-restricted-globals
    'no-restricted-globals': ['error', 'event'],

    // https://eslint.org/docs/rules/no-unused-expressions
    'no-unused-expressions': 'off',

    // https://eslint.vuejs.org/rules/no-template-shadow.html
    'vue/no-template-shadow': 'off',

    // allow underscore-dangle
    'no-underscore-dangle': 'off',

    // allow any syntax
    'no-restricted-syntax': 'off',

    // allow await in loop
    'no-await-in-loop': 'off',

    // allow use ++ and --
    'no-plusplus': 'off',
  },
};
