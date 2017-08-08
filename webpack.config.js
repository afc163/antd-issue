const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/dev-server?http://0.0.0.0:3000',
      './src/index.js'
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  resolve: {
    extensions: ['.jsx', '.js']
  },

  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM'
  // },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
      }
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    })
  ],

  devServer: {
    host: '0.0.0.0',
    port: 3000,
    inline: true,
    hot: true,
    compress: true,
    publicPath: '/',
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    clientLogLevel: 'none',
    overlay: false,
    stats: 'minimal'
 }
}
