/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', // leave empty if using default port 80
        pathname: '/genmart_october/public/uploads/all/**',
      },
      {
        protocol: 'http',
        hostname: 'genmartbd.com',
        pathname: '/**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;