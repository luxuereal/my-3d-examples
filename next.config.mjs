/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nike',
        permanent: true
      }
    ]
  }
};

export default nextConfig;
