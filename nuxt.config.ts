// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['@/styles/main.css'],
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    ['nuxt-umami', {
      autoTrack: true,
      websiteId: '9b863ab0-e9c3-4739-9413-98da88d84e92',
      scriptUrl: 'https://analytics.uvvu.pw/umami.js'
    }]
  ],
})
