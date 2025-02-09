/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  reactStrictMode: true,

};

export default nextConfig;
