/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [process.env.IMAGE_API, "avatars.mds.yandex.net"],
	},
};

export default nextConfig;
