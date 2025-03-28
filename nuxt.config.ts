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
      script:  [
        {
          hid: 'gtm',
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TFFM6HSM');`,
          type: 'text/javascript',
        },
      ],
      
    },
  },
  i18n: {
      vueI18n: '@/i18n/i18n.config.ts',
      defaultLocale: 'pt',
  },
})