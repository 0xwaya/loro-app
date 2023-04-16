/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

module.exports = {
	env: {
		API_URL: process.env.API_URL,
	},
	nerwork: {
		goerli: {
			accounts: [`${process.env.PRIVATE_KEY}`]
		}	
	}
};

module.exports = nextConfig;
