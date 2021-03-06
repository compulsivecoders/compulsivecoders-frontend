export default {
  mode: 'universal',

  buildModules: [
    '@nuxtjs/google-analytics',
    ['@nuxtjs/dotenv', { systemvars: true, only: ['BASE_URL', 'API_KEY'] }],
    '@nuxtjs/moment',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  googleAnalytics: {
    id: 'UA-153795796-1',
    debug: {
      enabled: false,
      sendHitTask: true
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Compulsive Coders',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/ck-editor', mode: 'client' },
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:2368/ghost/api/v3/content'
  },
  env: {
    baseURL: process.env.BASE_URL || 'http://localhost:2368/ghost/api/v3/content',
    apiKey: process.env.API_KEY
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
