// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'top-level-function': 'off',
    'semi': ['error', 'never'],
    'eqeqeq': 'off',
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  }},
)
