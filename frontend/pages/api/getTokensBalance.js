import { Network, Alchemy, TokenBalanceType } from 'alchemy-sdk';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  const { address, chain = 'ETH_SEPOLIA' } = JSON.parse(req.body);

  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network[chain] || Network.ETH_SEPOLIA,
  };

  const alchemy = new Alchemy(settings);

  try {
    const fetchedTokens = await alchemy.core.getTokenBalances(address, {
      type: TokenBalanceType.ERC20,
    });

    const loroBalance = await alchemy.core.getBalance(address);
    const parsedLoroBalance = parseInt(loroBalance.toString(), 10) / Math.pow(10, 18);

    const unifiedBalancedAndMetadata = [
      {
        name: 'Loro Coin',
        symbol: 'LORO',
        logo: 'https://github.com/0xwaya/loro-app/blob/main/frontend/public/token-logo.png?raw=true',
        decimals: 18,
        balance: parsedLoroBalance.toFixed(2),
        address: '0x3b3a9A66cD7f5f2dA202E973BB86976162f1C55D',
      },
    ];

    const fetchedTokenBalances = fetchedTokens.tokenBalances.map((token) => token.tokenBalance);
    const fetchedTokenAddresses = fetchedTokens.tokenBalances.map((token) => token.contractAddress);

    const fetchedTokenMetadata = await Promise.all(
      fetchedTokenAddresses.map(async (tokenAddress) => {
        try {
          return await alchemy.core.getTokenMetadata(tokenAddress);
        } catch (e) {
          console.log(e);
          return {
            name: null,
            symbol: null,
            logo: null,
            decimals: null,
          };
        }
      })
    );

    for (let x = 0; x < fetchedTokenMetadata.length; x++) {
      const tokenMetadata = fetchedTokenMetadata[x];
      const { name, symbol, logo, decimals } = tokenMetadata;
      const hexBalance = fetchedTokenBalances[x];
      const tokenAddress = fetchedTokenAddresses[x];

      if (hexBalance && decimals && name && symbol) {
        const convertedBalance = parseInt(hexBalance, 16) / Math.pow(10, decimals);

        if (convertedBalance > 0) {
          unifiedBalancedAndMetadata.push({
            name,
            symbol: symbol.length > 6 ? `${symbol.substring(0, 6)}...` : symbol,
            logo,
            decimals,
            balance: convertedBalance.toFixed(2),
            address: tokenAddress,
          });
        }
      }
    }

    const filteredBalances = unifiedBalancedAndMetadata.filter(
      (balanceAndMetadata) => balanceAndMetadata.name?.length
    );

    res.status(200).json(filteredBalances);
  } catch (e) {
    console.warn(e);
    res.status(500).send({
      message: 'something went wrong, check the log in your terminal',
    });
  }
}
