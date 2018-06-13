const path = require('path');

module.exports = {
  // context: __dirname + '/client',
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
    ],
  },
  output: {
    filename: 'product-details-module-bundle.js',
    path: path.join(`${__dirname}/public`),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
