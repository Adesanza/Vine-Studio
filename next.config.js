/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    reactStrictMode: true,
    // images: {
    //     domains: ["res.cloudinary.com"],
    // },
};

module.exports = nextConfig;