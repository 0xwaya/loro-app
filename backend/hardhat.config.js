require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;
const sepoliaUrl = process.env.SEPOLIA_RPC_URL;
const goerliUrl = process.env.GOERLI_RPC_URL;

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

if (hasValidPrivateKey && goerliUrl) {
  networks.goerli = {
    accounts: [privateKey],
    url: goerliUrl,
  };
}

module.exports = {
  solidity: '0.8.9',
  networks,
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || '',
  },
};
