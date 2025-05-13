/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/trillionlabs.co' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/trillionlabs.co/' : '',
}

export default nextConfig
