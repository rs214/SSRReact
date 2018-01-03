const path = require('path');

module.exports = {
  //Tell webpack the root file of our server application
  entry: './src/client/client.js',

  //Tell webpack where to put output file after generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  //Tell webpack to run Babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,  //run babel over js files
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', {targets: {browsers: ['last 2 versions']}}]
          ]
        }
      }
    ]
  }

};