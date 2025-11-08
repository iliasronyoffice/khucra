/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'http', 
        hostname: '127.0.0.1',
        pathname: '/**',
      },
    ],
    // Optional: Disable image optimization if still having issues
    unoptimized: process.env.NODE_ENV === 'development',
  },
}


export default nextConfig