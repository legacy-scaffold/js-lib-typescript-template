/* eslint-disable*/
const path = require("path");
const tsImportPluginFactory = require("ts-import-plugin");

module.exports = {
  entry: path.resolve("./example/index.tsx"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".tsx", ".ts", ".js", ".css", ".less", ".scss"],
  },
  module: {
    rules: [{
      test: /(\.ts)||(\.tsx)$/,
      use: [{
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: "antd",
              libraryDirectory: "lib",
              style: true
            })]
          }),
          compilerOptions: { module: "es2015" }
        },
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }]
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader",
        options: {
          javascriptEnabled: true,
        }
      }]
    }]
  }
};
