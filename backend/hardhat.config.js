require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity: "0.8.9",
	networks: {
		hardhat: {},
		OPTIMISM_MAINNET: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://mainnet.optimism.io`
		},
		OPTIMISM_GOERLI: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://goerli.optimism.io`
		},
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	}
}