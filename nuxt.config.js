export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'First Example Nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // With options
    ['@nuxtjs/vuetify', {
      /* module options */ }]

  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth'
  ],
  axios: {
    baseURL: 'http://localhost:3002/'
  },


  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3001
  },
  auth: {
  strategies: {
    local: {
      endpoints: {
        login: { url: 'api/user/login', method: 'post', propertyName: 'token' },
        logout: { url: '/api/auth/logout', method: 'delete' },
        user: { url: 'api/posts', method: 'get', propertyName: 'user' }
      },
      //local: para consumir un api de manera local, 
      //login el api donde esta nuestra login propertyName es la variable como se guarda en el navegador
      //logut: Si tenemos un admintrador de sessiones en el backend con esto podemos cerrar session y a la vez consumir el api
      //user: es la variable local que se guarda la info del usuario.//en el lado del backend tambien debe traer un objeto con sus propiedades.
      //ejem:   user:{prop:1,prop2:2}
      // tokenRequired: true,
      tokenType: 'Bearer',
      // globalToken: true,
      // autoFetchUser: true
    }
  }
}
}
