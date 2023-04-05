require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity: "0.8.9",
	networks: {
		hardhat: {},
		localhost: {
			url: 'http://localhost:8545',
			accounts: [`${process.env.PRIVATE_KEY}`]
		},
		ETHEREUM_MAINNET: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
		},
		goerli: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`
		},

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