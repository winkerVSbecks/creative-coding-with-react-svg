/* eslint-disable */

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!postcss'
    }, {
      test: /\.svg$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.(png)$/,
      loader: 'url-loader?mimetype=image/png?name=dist/[hash].[ext]'
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?mimetype=image/jpg?name=dist/[hash].[ext]',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.gif$/,
      loader: 'url-loader?mimetype=image/gif?name=dist/[hash].[ext]',
      include: path.join(__dirname, 'assets')
    }, {
      test: /\.(ico)$/,
      loader: 'static-loader'
    }]
  },
  postcss: function() {
    return [
      require('postcss-import')({
        addDependencyTo: webpack
      }),
      require('postcss-cssnext')
    ];
  }
};
