require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;
const sepoliaUrl = process.env.SEPOLIA_RPC_URL || process.env.GOERLI_RPC_URL;

const networks = {
  hardhat: {},
};

if (privateKey && privateKey.length === 64 && sepoliaUrl) {
  networks.sepolia = {
    accounts: [privateKey],
    url: sepoliaUrl,
  };
}

module.exports = {
  solidity: '0.8.9',
  networks,
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
  },
};
