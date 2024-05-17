// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  imports: {
    dirs: ['./constants/**', './types/**', './utils/**'],
  },
  ui: {
    icons: ['ion'],
  },
})
