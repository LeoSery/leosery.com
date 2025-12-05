/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,

  transpilePackages: ['react-pdf', 'pdfjs-dist'],

  async redirects() {
    return [
      {
        source: '/projects/becorn-project',
        destination: '/projects/oakfolks-project',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },

  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    config.resolve.alias['pdfjs-dist'] = path.join(__dirname, 'node_modules/pdfjs-dist/build/pdf.min.mjs');

    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
}

module.exports = nextConfig