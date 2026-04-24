require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;
const sepoliaUrl = process.env.SEPOLIA_RPC_URL;

const hasValidPrivateKey = privateKey && privateKey.length === 64;

const networks = {
  hardhat: {},
};

if (hasValidPrivateKey && sepoliaUrl) {
  networks.sepolia = {
    accounts: [privateKey],
    url: sepoliaUrl,
  };
}

module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks,
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
  },
};
