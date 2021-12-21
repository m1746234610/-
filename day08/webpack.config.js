const path = require('path')
const HTMLwebpackFile = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { options } = require('less')

module.exports = {
  mode: 'production',
  devServer: {
    port: 3002,
    open: true,
    contentBase: './dist'
  },

  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: { // 配置webpack打包时的环境
      arrowFunction: false, // 不使用箭头函数打包
      const: false // 不使用const
    }
  },

  // 指定weboack打包时用的工具
  module: {
    rules: [
      // 指定ts文件的处理
      {
        test: /\.ts$/,
        // 加载器（带loader都是加载器）：加载器时从后往前执行的
        use: [
          //* 下面两个加载器的配置方法都可以 ts-loader是简单配置 babel-loader是复杂配置
          // 配置babel加载器的一些设置
          {
            loader: "babel-loader",
            options: {
              // 预定义运行环境(代码都会在哪个浏览器运行)
              presets: [
                [// 第一个参数是插件名字，第二个是配置信息
                  // 指定环境插件:
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: { // 要兼容的浏览器以及浏览器的版本
                      "chrome": "80",
                      "ie": "11"
                    },
                    // 指定corejs的版本
                    "corejs": 3,
                    // 使用corejs的方式  'usage': 按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/
      },

      // 指定less文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // 兼容每个浏览器的最新的两个版本
                      browsers: "last 3 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new HTMLwebpackFile({
      template: './src/templete.html'
    }),

    // 打包时，先清除dist目录，在重新打包新的dist
    // new CleanWebpackPlugin()
  ],

  // 设置，哪些ts文件可以当成模块被其他文件引入
  resolve: {
    // 扩展: 表示以ts,js结尾的扩展名文件都可以当模块被引入
    extensions: ['.ts', '.js']
  }
}