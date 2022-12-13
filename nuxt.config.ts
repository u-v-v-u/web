// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/styles/main.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  },
  modules: [
    'nuxt-icon'
  ]
})
