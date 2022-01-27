const debug = process.env.DEBUG !== 'off'

module.exports = {
  reactStrictMode: true,
  assetPrefix: debug ? '/tend.build/' : '',
  trailingSlash: true
}
