// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'radix-vue/nuxt',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  hub: {
    database: true,
    kv: true,
  },
})
