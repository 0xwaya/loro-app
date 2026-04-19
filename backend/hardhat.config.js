require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const privateKey = process.env.PRIVATE_KEY;
const goerliUrl = process.env.GOERLI_RPC_URL;

const networks = {
  hardhat: {},
};

if (privateKey && privateKey.length === 64 && goerliUrl) {
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
