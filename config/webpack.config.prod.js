"use strict";
const paths = require("./paths");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  bail: true,
  devtool: "inline-source-map",
  entry: paths.appIndexFile,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: { "@src": paths.appSrc, "@locales": paths.appLocales, "@styles": paths.appStyles },
  },
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
  output: {
    path: paths.appBuild,
    filename: "static/js/[name].[hash].js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtmlIndexFile,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
