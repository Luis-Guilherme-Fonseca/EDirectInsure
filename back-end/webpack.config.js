const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, argv) => {
  const MODE = argv.mode
  
  return {
    entry: {
      server: './src/server.js',
    },
    plugins: [
      new CleanWebpackPlugin()
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: `${MODE}.[name].js`
    },
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }
}