const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              sources: {
                list: [
                  {
                    tag: "use",
                    attribute: "xlink:href",
                    type: "src",
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|webp|png|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]",
        },
      },
      {
        test: /\.webmanifest$/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext]",
        },
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: "handlebars-loader",
            options: {
              inlineRequires: false,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `./index.html`,
      chunks: ["index"],
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: ["**/*", "!assets/**/*"],
    }),
    new webpack.HotModuleReplacementPlugin(),
    ...(process.env.NODE_ENV === "production" ? [new CompressionPlugin()] : []),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets/images", to: "assets" },
        { from: "src/assets/favicon", to: "assets" },
        { from: "src/assets/favicon/favicon.ico", to: "favicon.ico" },
        { from: "src/assets/favicon/site.webmanifest", to: "site.webmanifest" },
        { from: "src/assets/sprite.svg", to: "assets" },
        { from: "./static/_headers", to: "./" },
        { from: "./static/sitemap.xml", to: "./" },
        { from: "./static/google094919d9efdd92de.html", to: "./" },
        { from: "./static/robots.txt", to: "./" },
      ],
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: "all",
          minChunks: 2,
          name: "common",
          priority: -10,
          enforce: true,
        },
      },
    },
  },
};
