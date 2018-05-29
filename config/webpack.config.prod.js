"use strict";
const paths = require("./paths");
const webpack = require("webpack");

module.exports = {
  bail: true,
  devtool: "inline-source-map",
  entry: paths.appIndexFile,
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: { "@src": paths.appSrc, "@locales": paths.appLocales },
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
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
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, comparisons: false },
      output: { comments: false, ascii_only: true },
    }),
  ],
};
