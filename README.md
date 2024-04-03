# Instalación

### 1. Instalar Husky:

```bash
npm install husky --save-dev
```

### 2. Inicializar Husky:

```bash
npx husky init
```

### 3. Instalar commitlint (Revisa si el mensaje del commit cumple con el formato especificado):

```bash
npm install @commitlint/config-conventional --save-dev
npm install @commitlint/cli --save-dev
```

### 4. Crear el archivo `commitlint.config.js` en la raíz del proyecto con el siguiente contenido:

```javascript
module.exports = { extends: ['@commitlint/config-conventional'] }
```

En este archivo puedes personalizar las reglas de validación de los mensajes de commit, por ejemplo:

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'revert'],
    ],
    'subject-case': [0],
  },
}
```

### 5. Instalar prettier (Formatea el código automáticamente):

```bash
npm install prettier --save-dev
```

### 6. Crear el archivo `.prettierrc` en la raíz del proyecto:

```json
{
  "semi": false,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
```

### 7. Crear el archivo `.prettierignore` en la raíz del proyecto:

```text
node_modules
dist
```

### 8. Instala `eslint-config-prettier` y `eslint-plugin-prettier`:

```bash
npm install eslint-config-prettier --save-dev
npm install eslint-plugin-prettier --save-dev
```

### 9. Configura el archivo .eslintrc.cjs:

```javascript
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
```

# Notas

- Para evitar que se ejecute el husky en un commit, se puede usar el flag `--no-verify` o `-n`:

```bash
git commit -m "Mensaje de commit" -n
```
