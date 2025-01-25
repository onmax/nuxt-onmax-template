import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetScalePx } from 'unocss-preset-scale-px'

defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetScalePx(),
  ],
})
