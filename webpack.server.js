const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // Inform Webpack we are building a bundle for nodeJS, rather than the browser
  target: 'node',

  //Tell webpack the root file of our server application
  entry: './src/index.js',

  //Tell webpack where to put output file after generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};

module.exports = merge(baseConfig, config);