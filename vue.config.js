const path = require("path");

module.exports = {
  devServer: {
    port: 1024,
  },
  configureWebpack: {
    devtool: "source-map",
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/styles/index.less")],
    },
  },
};
