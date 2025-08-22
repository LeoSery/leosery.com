/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/projects/becorn-project',
        destination: '/projects/oakfolks-project',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig