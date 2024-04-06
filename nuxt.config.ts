// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['@/assets/css/main.css', '@/assets/css/hamburguer.css'],
  modules: ['@nuxt/image'],
  plugins: ['@/plugins/uikit.client.ts'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
