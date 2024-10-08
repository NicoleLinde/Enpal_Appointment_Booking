/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/:path*', // Proxy to Backend
            },
        ];
    },
};

export default nextConfig;
