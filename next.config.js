const usePrefix = process.env.DEPLOY === 'true'

module.exports = {
  reactStrictMode: true,
  // assetPrefix: usePrefix ? '/www/' : undefined,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/design',
        destination: 'https://parts.studio/',
        permanent: false,
        basePath: false
      },
    ]
  },
}
