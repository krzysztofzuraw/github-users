"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const paths = require("./paths");

module.exports = {
  entry: paths.appIndexFile,
  devtool: "inline-source-map",
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader", options: { javascriptEnabled: true } },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: { "@src": paths.appSrc, "@locales": paths.appLocales, "@styles": paths.appStyles },
  },
  output: {
    path: paths.appBuild,
    filename: "static/js/[name].js",
    publicPath: "/",
  },
  plugins: [new HtmlWebpackPlugin({ inject: true, template: paths.appHtmlIndexFile })],
};
