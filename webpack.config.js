const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const buildPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: buildPath,
      watch: true,
    },
  },
};
