import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(antfu({
  formatters: true,
  vue: true,
  unocss: true,
}, {
  rules: {
    'unused-imports/no-unused-vars': [
      'error',
      {
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
}))
