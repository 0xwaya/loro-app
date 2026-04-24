/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
      },
    ],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
