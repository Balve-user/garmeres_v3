import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	compiler: {},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
	/*async redirects() {
		return [
			{
				source: "/",
				destination: "/se/ruoktot",
				permanent: true,
			},
			{
				source: "/no/hjem",
				destination: "/en/home",
				permanent: true,
			},
			{
				source: "/sme/ruoktot",
				destination: "/se/ruoktot",
				permanent: true,
			},
			{
				source: "/home",
				destination: "/en/home",
				permanent: true,
			},
		];
	},*/
};

export default nextConfig;
