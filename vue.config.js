module.exports = {
  pluginOptions: {
      vuetify: {
          // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
      }
  },
  chainWebpack: config => {
    config.module
        .rule('raw')
        .test(/\.glsl$/)
        .use('raw-loader')
        .loader('raw-loader')
        .end()
  }
}
