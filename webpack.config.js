const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        'postcss-loader']
      },
      {
        test: /\.(png|svg|jp(e)?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]',
        }
      }, {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'vendor/[name].[contenthash][ext]',
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/index_registered.html',
      filename: 'index_registered.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/uikit.html',
      filename: 'uikit.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/search.html',
      filename: 'search.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/calendar.html',
      filename: 'calendar.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/togo.html',
      filename: 'togo.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
};
