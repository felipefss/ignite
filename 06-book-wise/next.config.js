/** @type {import('next').NextConfig} */
const nextConfig = {
  // TODO: Remove this image config from here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/*.png'
      }
    ]
  }
}

module.exports = nextConfig
