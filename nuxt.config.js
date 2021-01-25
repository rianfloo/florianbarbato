export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'fr'],
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: {
              subtitle: 'Developer & Product Designer',
              description:
                'Full stack developer specialized in JavaScript (VueJS, React & NodeJS) and Ruby On Rails. I also design and build user interfaces. Stade Rennais Football Club fan and Bourgogne rouge lover.'
            },
            fr: {
              subtitle: 'Développeur & Product Designer',
              description:
                'Développeur full stack spécialisé en JavaScript (VueJS, ReactJs & NodeJS) et Ruby On Rails. Je créé et intègre également des interfaces utilisateurs. Je suis un grand supporter du Stade Rennais et fan de Bourgogne rouge.'
            }
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
