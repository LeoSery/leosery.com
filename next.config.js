/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/CV',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '(?!/cv).*',
          },
        ],
        destination: '/cv',
        permanent: true,
      },
      {
        source: '/Projects',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '(?!/projects).*',
          },
        ],
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/Projects',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '(?!/projects).*',
          },
        ],
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/Projects/:path*',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '(?!/projects).*',
          },
        ],
        destination: '/projects/:path*',
        permanent: true,
      },
      {
        source: '/Contact',
        has: [
          {
            type: 'header',
            key: 'referer',
            value: '(?!/contact).*',
          },
        ],
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig