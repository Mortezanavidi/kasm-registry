/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: ' https://mortezanavidi.github.io/kasm-registry/1.0/icon.png',
    listUrl: ' https://mortezanavidi.github.io/kasm-registry/',
    contactUrl: ' https://mortezanavidi.github.io/kasm-registry/issues/',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
