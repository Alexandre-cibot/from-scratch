const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, argv) => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ],
    devtool: argv.mode === 'development' ? 'source-map' : 'none',
    devServer: {
      contentBase: './dist',
      port: '3333',
      open: true,
      compress: false
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  }
};