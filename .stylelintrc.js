module.exports = {
  root: true,
  plugins: ['stylelint-order', 'stylelint-scss'],
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html',
    'stylelint-config-prettier',
  ],
  overrides: [{ files: ['src/**/*.scss'], customSyntax: 'postcss-scss' }],
  rules: {
    'import-notation': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['deep', 'global'] },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['v-deep', 'v-global'] },
    ],
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['extend', 'include', 'mixin'] },
    ],
    'no-invalid-position-at-import-rule': null,
    'selector-id-pattern': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'declaration-block-no-duplicate-properties': true,
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
