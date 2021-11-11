const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public/scripts"),
    filename: "bundle.js",
  },

  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "public/scripts")],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  optimization: {
    minimize: false,
  },

  module: {
    rules: [
      {
        test: /\.js$/,

        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/scripts",
  },
  devtool: "source-map",
};
