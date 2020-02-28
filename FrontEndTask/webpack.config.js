/*module.exports = {
    entry: './main.js',
    output: {
        path:__dirname,
        file: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            }
        ]
    }
}*/
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/main.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname +'/public/'
  },
  devServer: {
    contentBase: __dirname + '/public'
  },
  module: {
    rules: [{
      test: /\.js$/, // include .js files
      //enforce: "pre", // preload the jshint loader
      exclude: /node_modules/, // exclude any and all files in the node_modules folder
      use: [{
        loader: 'babel-loader',
        // more options in the optional jshint object
        /*options: {  // ⬅ formally jshint property
          camelcase: true,
          emitErrors: false,
          failOnHint: false
        }*/
      }]
    }]
  },
};