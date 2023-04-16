require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()

module.exports = {
	solidity: "0.8.9",
	networks: {
		hardhat: {},
		goerli: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://eth-goerli.g.alchemy.com/v2/x-bKaeoHtE2HGv0JrWFlGfA7F6F7OSKg`	
		},
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	}
}