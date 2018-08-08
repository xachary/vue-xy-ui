var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ExtractSCSS = new ExtractTextPlugin({
  filename: 'vue-xy-ui.css',
  allChunks: true
})
const CopyWebpackPlugin = require('copy-webpack-plugin')

// const postCSSPlugins = require('./postcss.config');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  plugins: [
    ExtractSCSS,
    new CopyWebpackPlugin([
      {
        from: 'src/lib/scss/_mixin.scss',
        to: '_mixin.scss',
        force: true
      },
      {
        from: 'src/lib/nuxt/xy-page-progress.vue',
        to: 'nuxt/xy-page-progress.vue',
        force: true
      },
      // {
      //   from: 'src/lib/scss/nuxt/page.scss',
      //   to: 'nuxt/page.scss',
      //   force: true
      // },
      // {
      //   from: 'src/lib/scss/base.scss',
      //   to: 'base.scss',
      //   force: true
      // },
      {
        from: 'src/lib/style/normalize-8.0.0.css',
        to: 'style/normalize-8.0.0.css',
        force: true
      },
      // {
      //   from: 'src/lib/mint-ui/lib/style.css',
      //   to: 'mint-ui/lib/style.css',
      //   force: true
      // }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'vue-style-loader',
      //     use: [
      //       'css-loader',
      //       'sass-loader'
      //     ]
      //   }),
      //   include: /src/
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader',
              'postcss-loader'
            ]
            // 'scss': ExtractTextPlugin.extract({
            //   fallback: 'vue-style-loader',
            //   use: [
            //     'css-loader',
            //     'sass-loader'
            //   ]
            // })
          }
        },
        include: /src/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.entry = './src/lib/index.js'
  module.exports.output.filename = 'vue-xy-ui.js'
  module.exports.output.library = 'vue_xy_ui'
  module.exports.output.libraryTarget = 'umd'
  module.exports.output.umdNamedDefine = true
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false,
    //     drop_debugger: true,
    //     drop_console: true
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])

  module.exports.externals = {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
    'vue-lazyload': {
      root: 'vue-lazyload',
      commonjs: 'vue-lazyload',
      commonjs2: 'vue-lazyload',
      amd: 'vue-lazyload'
    }
  }
}
