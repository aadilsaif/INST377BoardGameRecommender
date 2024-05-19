/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['cf.geekdo-images.com'],
    },
};

export default nextConfig;