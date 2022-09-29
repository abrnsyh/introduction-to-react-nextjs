/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	basePath: !debug ? "/introduction-to-react-nextjs" : "",
	assetPrefix: !debug ? "/introduction-to-react-nextjs/" : "",
};

module.exports = nextConfig;
