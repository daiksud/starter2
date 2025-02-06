// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'vuetify-nuxt-module', '@nuxt/image'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  nitro: {
    static: true,
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
  vuetify: {
    vuetifyOptions: {
      components: ['VContainer'],
    },
  },
})