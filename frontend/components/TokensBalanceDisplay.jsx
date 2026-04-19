import { useState, useEffect, useCallback } from 'react';
import { useAccount } from 'wagmi';
import styles from '../styles/Balance.module.css';
import Image from 'next/image';

export default function TokensBalancePanel({ walletAddress, chain }) {
  const [tokensBalance, setTokensBalance] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [myAddress, setMyAddress] = useState();

  const { address, isDisconnected } = useAccount();

  const getBalance = useCallback(async () => {
    setIsloading(true);

    if (!isDisconnected || walletAddress) {
      try {
        const fetchedTokensBalance = await fetch('/api/getTokensBalance', {
          method: 'POST',
          body: JSON.stringify({
            address: isDisconnected ? walletAddress : address,
            chain,
          }),
        }).then((res) => res.json());

        setTokensBalance(fetchedTokensBalance);
      } catch (e) {
        console.log(e);
      }
    }

    setIsloading(false);
  }, [address, chain, isDisconnected, walletAddress]);

  useEffect(() => {
    if (myAddress?.length) getBalance();
  }, [getBalance, myAddress]);

  useEffect(() => {
    if (walletAddress?.length) setMyAddress(walletAddress);
  }, [walletAddress]);

  useEffect(() => {
    if (address?.length) setMyAddress(address);
  }, [address]);

  if (!walletAddress && isDisconnected) return 'No address';

  return (
    <div className={styles.token_panel_container}>
      <div className={styles.tokens_box}>
        <div className={styles.header}>
          {myAddress?.slice(0, 6)}...{myAddress?.slice(myAddress.length - 4)}
        </div>
        {isLoading
          ? 'Loading...'
          : tokensBalance?.length &&
            tokensBalance?.map((token, i) => {
              const convertedBalance = Math.round(token.balance * 100) / 100;
              return (
                <div key={i} className={styles.token_container}>
                  <div className={styles.token_name}>
                    {token.logo ? (
                      <Image
                        className={styles.image_container}
                        src='/token-logo.png'
                        alt='Token logo'
                        width={100}
                        height={100}
                      />
                    ) : (
                      <div className={styles.image_placeholder_container}></div>
                    )}
                    <div className={styles.coin_name}>{token.name}</div>
                  </div>
                  <div className={styles.token_info}>
                    <div className={styles.price}>{convertedBalance}</div>
                    <div className={styles.coin_symbol}>{token.symbol}</div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
