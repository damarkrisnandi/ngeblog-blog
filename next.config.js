/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  imageSizes:  [500, 400, 300, 200 ,100, 96, 76],
  redirects: () => {
    return [{
      source: '/',
      destination: '/1',
      permanent: true,
    }]
  }
}

module.exports = nextConfig
