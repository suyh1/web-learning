const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports ={
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  clean: true,
  plugin: [new htmlWebpackPlugin({
    template:path.resolve(__dirname, 'public/index.html')
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};