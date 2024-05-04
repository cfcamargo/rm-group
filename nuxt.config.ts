// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['@/assets/css/main.css', '@/assets/css/hamburguer.css'],
  modules: ['@nuxt/image', 'nuxt-swiper', '@pinia/nuxt', "@nuxtjs/i18n"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'RM AGRO | Consultoria e Gestão de Risco',
    }
  },
  i18n: {
      vueI18n: '@/i18n/i18n.config.ts',
  }
})