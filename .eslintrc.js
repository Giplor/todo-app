module.exports = {
  extends: ['universe', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 100,
        endOfLine: 'auto',
      },
    ],
  },
};
