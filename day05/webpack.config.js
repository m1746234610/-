// 引入一个path包，帮助拼接路径
const path = require('path')
// 引入html插件
const HTMLwebpackFile = require('html-webpack-plugin')

// webpack中所有的配置信息都应该写道module.exports中
module.exports = {
  // 设置mode
  mode: 'production', //development: 开发环境，production: 生产环境
  devServer: {
    port: 3000,
    open: true,
    contentBase: './dist'
  },

  entry: './src/index.ts',//指定入口文件（主文件:表示从哪个文件开始执行）
  // 指定出口文件(打包文件所在的目录)
  output: { // 输出的位置
    // 指定打包文件的目录
    // path:'./dist',
    path: path.resolve(__dirname, 'dist'),
    // 打包后的ts文件的名字
    filename: 'bundle.js',
    clean: true,// 更新后，删除之前的bundle.js文件
    environment: { // 告诉webpack打包时不使用箭头函数
      arrowFunction: false
    }
  },

  // *指定webpack打包时要使用的模块
  module: {
    rules: [// 指定加载规则
      {
        test: /\.ts$/,// test指定规则生效的文件
        use: [
          // 配置bobel (作用: 兼容其他浏览器，支持老版本)
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置bobel
            options: {
              // 设置预定义的环境(代码要在哪些浏览器中运行)
              // presets:['@babel/preset-env'],
              presets: [
                [
                  "@babel/preset-env", // 指定环境的插件
                  // 配置信息
                  {
                    targets: { // 要兼容的浏览器版本
                      "chrome": "60",
                      "ie": "11"
                    },
                    "corejs": "3", // 指定corejs的版本（可以让低版本浏览器支持一些新特性）
                    "useBuiltIns": "usage",//使用corejs的方式，表示按需加载
                  }
                ]
              ]
            }
          },
          'ts-loader',// ts要使用的loader
        ],// 谁在后边谁先执行
        // *上面两句话的意思是: 用ts-loader处理以.ts结尾的文件
        exclude: /node_modules/ // 只要路径中用这个文件名，就不进行编译
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new HTMLwebpackFile({
      // title: "这是一个自定义的title"
      template: './src/template.html'//使用这个html模板
    }) // 自动创建html文件，并引入相关资源
  ],

  // 用来设置可以引入的模块
  resolve: {
    extensions: ['.ts', '.js'],//表示以ts、js结尾的文件都可以当成模块引入
  }
}