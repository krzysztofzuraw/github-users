const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  entry: paths.appIndexFile,
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  },
  output: {
    path: paths.appBuild,
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: "public/index.html" })
  ]
};
