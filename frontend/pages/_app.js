import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import {
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
  avalancheFuji,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { NextUIProvider } from '@nextui-org/react';
import MainLayout from '../layout/mainLayout';

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo';

const { chains, provider } = configureChains(
  [goerli, polygonMumbai, optimismGoerli, arbitrumGoerli, avalancheFuji],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || 'demo' }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Loro dApp',
  projectId: walletConnectProjectId,
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} modalSize='compact'>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </RainbowKitProvider>
      </WagmiConfig>
    </NextUIProvider>
  );
}

export default MyApp;
