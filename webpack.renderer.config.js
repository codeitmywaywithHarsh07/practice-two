const rules = require('./webpack.rules');
// const plugins = require('./webpack.plugins');

rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
});

module.exports = {
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
