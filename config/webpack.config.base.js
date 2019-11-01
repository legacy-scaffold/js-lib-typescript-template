const path = require("path");


module.exports = {
  entry: path.resolve("./examples/index.tsx"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../"),
    },
    extensions: [".ts", ".tsx", ".js", ".css", ".less", ".scss"],
  },
  module: {
    rules: [{
      test: /(\.ts)||(\.tsx)$/,
      use: [{ loader: "ts-loader" }],
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
