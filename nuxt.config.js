const path = require('path');
var glob = require('glob');
let files = glob.sync('**/*.md', {
  cwd: 'content'
});
const markdownPaths = ['blog']



export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
    }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#ff3900',
    height: '1px',
    throttle: 0,
    duration: '5000',
    continuous: true
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/vuetyped.js',
  ],
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
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [
      'nuxt-fontawesome', {
        imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
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
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        //use: ['raw-loader'],
        loader: 'frontmatter-markdown-loader'
      });
    }
  },
  generate: {
    routes: dynamicMarkdownRoutes(),
  }
}

// function getSlugs(post, _) {
//   let slug = post.substr(0, post.lastIndexOf('.'));
//   return `/blog/${slug}`;
// }

function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob.sync(`${mdPath}/*.md`, {
          cwd: 'content'
        })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`);
    })
  );
}

// function getDynamicPaths(urlFilepathTable) {
//   return [].concat(
//     ...Object.keys(urlFilepathTable).map(url => {
//       var filepathGlob = urlFilepathTable[url];
//       return glob
//         .sync(filepathGlob, {
//           cwd: 'content'
//         })
//         .map(filepath => `${url}/${path.basename(filepath, '.md')}`);
//     })
//   );
// }
