export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  srcDir: 'src/',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css',
        type: 'text/css',
      },
      {
        rel: 'stylesheet',
        href: '//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css',
        type: 'text/css',
      },
      {
        rel: 'stylesheet',
        href:
          '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        type: 'text/css',
      },
    ],
  },
  router: {
    scrollBehavior: function onScrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/css/app.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-js-modal.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
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
    filenames: {
      manifest: 'manifest/[name].js',
      vendor: 'vendor/[name].js',
      app: 'app/[name].js',
      chunk: 'chunk/[name].js',
      css: 'css/[name].css',
      img: 'img/[name].[ext]',
      md: 'md/[name].[ext]',
      html: 'html/[name].[ext]',
    },
    extractCSS: true,
    extend(config, ctx) {},
  },
};
