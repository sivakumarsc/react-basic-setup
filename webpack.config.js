const path = require('path');

//Directory which will contain third party libraries and build js
const BUILD_DIR = path.resolve(__dirname, 'public');

//Directory which contains our app source codes
const APP_DIR = path.resolve(__dirname, 'src');

//To return html file as template
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: BUILD_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  //Entry point to our app
  entry: APP_DIR + '/index.js',
  //Where the bundled js file to be located after successful build
  output: {
    path: BUILD_DIR + '/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
     {
       //Babel to lookup for js/jsx files except node_modules folder
       test: /(\.js|\.jsx)$/,
       exclude: /(node_modules)/,
       loader: 'babel-loader',
       query: {
          presets: ['es2015', 'react'],
        }
     }
   ]
  },
  //Configure needed plugins with webpack
  plugins: [HtmlWebpackPluginConfig]
}
