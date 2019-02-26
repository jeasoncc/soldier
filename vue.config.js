module.exports = {
  //axios域代理，解决axios跨域问题
  publicPath: "/",
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    // lintOnSave: process.env.NODE_ENV !== "production",
    proxy: {
      "/apis": {
        target: "http://172.16.114.6:8080/ArmyCreate",
        changeOrigin: true,
        ws: true,
        pathRewrite: {}
      }
    }
  }
};
