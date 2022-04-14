const path = require("path");

module.exports = {
  devServer: {
    port: 1024,
    proxy: {
      "/coffee": {
        target: "http://127.0.0.1:3000",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/assets/styles/index.less")],
    },
  },
};
