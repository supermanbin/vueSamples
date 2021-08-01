const path = require("path");

module.exports = {
  devServer: {
    port: 1024,
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/styles/index.less")],
    },
  },
};
