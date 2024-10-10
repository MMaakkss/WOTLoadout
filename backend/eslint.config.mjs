import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: { prettier: prettierPlugin },
    rules: {
      'prefer-const': 'error',
      'prettier/prettier': 'error',
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
