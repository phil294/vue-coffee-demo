/** @type { import("@vue/cli-service").ProjectOptions } */
const options = {
  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add('./src/main.coffee')

    config.resolve
      .extensions
        .add('.coffee')
        .end()
  },
}
module.exports = options;