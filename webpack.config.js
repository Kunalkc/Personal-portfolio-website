const path = require('path');

module.exports = {

  entry: {
    dev: './dev.js',
    films: './films.js',
  },
  
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',     
  },


  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  mode: 'development',
};
