module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-dashboard/" : "/",
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/sass/main.scss";`,
      },
    },
  },
};
