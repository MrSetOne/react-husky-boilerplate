module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'package.json'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    eqeqeq: ['error', 'always'],
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-empty-function': 'error',
    'no-unused-vars': 'error',
    'no-var': 'error',
    'prefer-const': 'warn',
  },
}
