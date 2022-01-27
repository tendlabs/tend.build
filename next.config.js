const usePrefix = process.env.DEPLOY === 'true'

module.exports = {
  reactStrictMode: true,
  assetPrefix: usePrefix ? '/www/' : undefined,
  trailingSlash: true
}
