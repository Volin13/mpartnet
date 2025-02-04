const webpack = require("webpack");
const path = require("path");
const languages = ["ru", "uk"];
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
    // publicPath: '/portfolio/',
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

    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin(),
    ...(process.env.NODE_ENV === "development"
      ? [
          new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ["**/*", "!assets/**/*"],
          }),
        ]
      : []),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets/images",
          to: "assets",
        },
        {
          from: "src/assets/favicon",
          to: "assets",
        },
        {
          from: "src/assets/sprite.svg",
          to: "assets",
        },
      ],
    }),
    new TerserPlugin(),
    new CssMinimizerPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    hot: true,
    // historyApiFallback: {
    //   rewrites: [
    //     {
    //       from: /^\/projects\/(\d+)(\?lang=(en|uk))?$/,
    //       to: context => {
    //         const searchParams = new URLSearchParams(context.parsedUrl.search);
    //         const id = context.parsedUrl.pathname.split('/').pop();
    //         const lang = searchParams.get('lang') || 'uk';
    //         return `/projectDetails-${id}_${lang}.html`;
    //       },
    //     },
    //     { from: /^\/$/, to: '/index_uk.html' },
    //     {
    //       from: /^\/(\?lang=uk)?$/,
    //       to: '/index_uk.html',
    //     },
    //   ],
    // },
  },
  optimization: {
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
