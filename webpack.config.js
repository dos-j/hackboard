var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool:'eval-source-map'
};
