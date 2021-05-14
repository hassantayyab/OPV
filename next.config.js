const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['gsap', 'dat.gui'])
const path = require('path')

const nextConfig = {
  target: 'serverless',

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
    @import "./variables.scss";
    @import "./mixins.scss";
  `,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })
    return config
  },
}

module.exports = withPlugins([withTM], nextConfig)
