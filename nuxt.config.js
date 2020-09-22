// const webpack = require('webpack')


let plugins = []
 
if(process.env.NODE_ENV==='production'){
    //plugins.push('transform-remove-console')
}


export default {
  mode: 'universal',
  /* router: {
    base: '/'
  }, */
 	router: {
        base: '/student'
	},
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'YIHOME忆家是国内领先的海外留学租房平台，租房服务包括：澳洲留学租房、英国留学租房、雷丁租房、布莱顿租房、墨尔本等海外留学租房生态圈。致力为英国和澳洲市场海外留学生提供长期租住解决方案，咨询热线：021-66610767' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }, // iOS浏览器禁止缩放
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'YIHOME,留学生租房,澳洲留学租房,英国留学租房' },
	  
      { name: 'renderer', content: 'webkit' }, // 强制让360浏览器使用Webkit内核
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://www.inyihome.com/favicon.ico' }
    ],
	//script:[
	   //    {src:"http://console.hongliang.org/js/console.min.js?nRNL1ney"},
	  //  ]
  },
  /*
  ** Customize the progress-bar color
  */
  //loading: { color: '#c33' },
  //loading: '@/components/loading.vue',
  /*
  ** Global CSS
  */
  css: [
  	'~assets/css/reset.css',
    'element-ui/lib/theme-chalk/index.css',
		{ src: "swiper/dist/css/swiper.css" },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
	{ src: '@/plugins/element-ui', ssr: true },
	{ src: '@/plugins/bootstrap', ssr: true },
	{ src: '@/plugins/api', ssr: false },
	// { src: '@/plugins/vconsole.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
      "@nuxtjs/proxy",
    'bootstrap-vue/nuxt',
  ],
    proxy: [
        [
            '/yihome-admin',
            {
                target: 'https://inyihome.com',
                pathRewrite: { '^/yihome-admin': '/yihome-admin'}
            }
        ]
    ],
  bootstrapVue: {
    components: ['BContainer', 'BRow', 'BCol','BImg']
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
	optimization: {
	  splitChunks: {
		chunks: 'all',
		automaticNameDelimiter: '.',
		maxAsyncRequests: 7,
		cacheGroups: {
		  vuetify: {
			test: /node_modules[\\/]vuetify/,
			chunks: 'all',
			priority: 20,
			name: true
		  },
		  elementui: {
			test: /node_modules[\\/]element-ui/,
			chunks: 'all',
			priority: 20,
			name: true
		  }
		}
	  }
	},
	analyze: {
	  analyzerMode: 'static'
	},
	babel:{
		'plugins':plugins
	},
	extractCSS: { allChunks: true },
    transpile: [/^element-ui/,/^bootstrapVue/],
	/* loaders:[
		//小图片的64位打包
		  {
			test:/\.(png|jpe?g|gif|svg)$/,
			loader:"url-loader",
			query:{
			  limit:1000,
			  name:'img/[name].[hash].[ext]'
			}
		  },
		  {
			test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
			loader: 'url-loader',
			options: {
			  limit: 1000,
			  name: 'fonts/[name].[hash:7].[ext]'
			}
		  }
	], */
	/* plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery'
		})
	], */
	
    /*
    ** You can extend webpack config here
    */
	
    extend (config, ctx) {
    }
  }
}
