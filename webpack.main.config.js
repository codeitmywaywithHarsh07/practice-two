const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '.webpack'),
    filename: 'main.js'
  },
  target: 'electron-main',
  module: {
    rules: require('./webpack.rules')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
