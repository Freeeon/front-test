module.exports = {
  productionSourceMap: false,
  configureWebpack: config => {
    config.entry = {
      vue: [
        './src/main.js'
      ]
    }
    config.resolve.alias = {
      vue$: 'vue/dist/vue.esm.js',
      '@': '/app/frontend/src'
    }
  }
}
