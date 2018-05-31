const webpack = require('webpack');
const path = require('path');

module.exports = {
  // context: __dirname + '/client',
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname + '/public')
  }
};