const path = require('path')

//Node 在sass中通过别名（@或者~）引用需要指定路径
const sassImporter = function(url) {
  if (url[0] === '~' && url[1] !== '/') {
    return {
      file: path.resolve(__dirname, '..', 'node_modules', url.substr(1))
    }
  }

  const reg = /^@styles\/(.*)/
  return {
    file: reg.test(url) ? path.resolve(__dirname, '..', 'src/styles', url.match(reg)[1]) : url
  }
}


const config = {
  projectName: 'myTaro',
  date: '2019-4-13',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    },
    sass: {
      importer: sassImporter
    }
  },
  defineConstants: {
  },
  alias: {
    '@actions': path.resolve(__dirname, '..', 'src/actions'),
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@styles': path.resolve(__dirname, '..', 'src/styles'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@constants': path.resolve(__dirname, '..', 'src/constants'),
    '@reducers': path.resolve(__dirname, '..', 'src/reducers')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    //NOTE H5 打包静态资源时带hash值，方便缓存、版本管理,添加output
    publicPath: '/',
    staticDirectory: 'static',
    output:{
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[name].[chunkhash].js'
    },
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].[chunkhash].css',
    },
      imageUrlLoaderOption: {
      limit: 5000,
      name: 'static/images/[name].[hash].[ext]'
    },
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    sassLoaderOption: {
      importer: sassImporter
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
