const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
      app: './src/index.ts'
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.min.js'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
      rules: [{
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
      }]
  },
  devServer: {
    contentBase: __dirname
  }
}