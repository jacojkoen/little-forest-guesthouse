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

  vite
  : {
      css
  : {
        preprocessorOptions
  : {
          scss
  : {
            additionalData
  : '@use "~/assets/animation.scss" as *;'
          }
        }
      }
    },

  compatibilityDate: '2024-10-05',
})