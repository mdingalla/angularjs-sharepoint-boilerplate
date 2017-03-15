'use strict';

// Modules
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');


module.exports = function makeWebpackConfig() {
  var config = {};

  config.entry = {
    vendor: ['babel-polyfill', 'lodash'],
    main: './src/main.js'
  };

  config.output = {
      path: './dist',
      filename: 'bundle.js'
  };

  // Initialize module
 config.module = {
   rules: [{
     // JS LOADER
     // Reference: https://github.com/babel/babel-loader
     // Transpile .js files using babel-loader
     // Compiles ES6 and ES7 into ES5 code
     test: /\.js$/,
     loader: 'babel-loader',
     exclude: /node_modules/
   }, {
     // CSS LOADER
     // Reference: https://github.com/webpack/css-loader
     // Allow loading css through js
     //
     // Reference: https://github.com/postcss/postcss-loader
     // Postprocess your css with PostCSS plugins
     test: /\.css$/,
     // Reference: https://github.com/webpack/extract-text-webpack-plugin
     // Extract css files in production builds
     //
     // Reference: https://github.com/webpack/style-loader
     // Use style-loader in development.
     loader:  ExtractTextPlugin.extract({
       fallbackLoader: 'style-loader',
       loader: [
         {loader: 'css-loader', query: {sourceMap: true}},
         {loader: 'postcss-loader'}
       ],
     })
   }, {
     // ASSET LOADER
     // Reference: https://github.com/webpack/file-loader
     // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
     // Rename the file using the asset hash
     // Pass along the updated reference to your code
     // You can add here any file extension you want to get copied to your output
     test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
     loader: 'file-loader'
   }, {
     // HTML LOADER
     // Reference: https://github.com/webpack/raw-loader
     // Allow loading html through js
     test: /\.html$/,
     loader: 'raw-loader'
   }]
 };

 config.plugins = [
    new webpack.LoaderOptionsPlugin({
      test: /\.scss$/i,
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    })
  ];

 config.plugins.push(
      new ExtractTextPlugin({filename: 'css/[name].css', allChunks: true}),
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      // new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin(),

      new CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        })

      // Copy assets from the public folder
      // Reference: https://github.com/kevlened/copy-webpack-plugin
      // new CopyWebpackPlugin([{
      //   from: __dirname + '/src/public'
      // }])
    );

  return config;
}();
