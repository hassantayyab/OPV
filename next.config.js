const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['gsap'])
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

// const path = require('path')
// const withTM = require('next-transpile-modules')

// const nextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//     prependData: `
//     @import "./variables.scss";
//     @import "./mixins.scss";
//   `,
//   },

//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(glsl|vs|fs|vert|frag)$/,
//       exclude: /node_modules/,
//       use: ['raw-loader', 'glslify-loader'],
//     })
//     return config
//   },
// }

// module.exports = withTM({transpileModules: ['gsap']}, nextConfig)
