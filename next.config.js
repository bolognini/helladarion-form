const withImages = require('next-images')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = withImages({
  esModule: true,
})

module.exports = {
  resolve: {
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })]
  }
}
