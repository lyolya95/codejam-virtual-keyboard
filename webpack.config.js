const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                    options: { minimize: false},
                }
            ]
        },
        {
           test: /\.css$/,
           use: [
               MiniCssExtractPlugin.loader, 'css-loader'
           ],
        }
    ]
  },

  plugins: [
      new HtmlWebPackPlugin({
          template: './src/index.html',
          filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        template: '[name].css',
        filename: '[id].css'
    })
  ],
devtool: 'inline-source-map',

  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
  }
};