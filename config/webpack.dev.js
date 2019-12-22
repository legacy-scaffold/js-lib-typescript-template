/* eslint-disable*/
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const wbpack_base_config = require("./webpack.base");


module.exports = merge(wbpack_base_config, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    open: true,
    inline: true,
    host: "127.0.0.1",
    disableHostCheck: true
  },
  plugins: [new HtmlWebpackPlugin()]
});
