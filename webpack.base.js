module.exports = {
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