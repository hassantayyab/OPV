// const withPlugins = require('next-compose-plugins')
// const withTM = require('next-transpile-modules')
// const path = require('path')

// const nextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'styles')],
//     prependData: `
//     @import "./_variables.scss";
//     @import "./_mediaQueries.scss";
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

// module.exports = withPlugins(
//   [
//     [
//       withTM,
//       {
//         transpileModules: ['gsap'],
//       },
//     ],
//   ],
//   nextConfig,
// )

const path = require('path')
const withTM = require('next-transpile-modules')(['gsap'])

const nextConfig = {
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

module.exports = withTM(nextConfig)
