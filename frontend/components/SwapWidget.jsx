import Link from 'next/link';
import styles from '../styles/SwapWidget.module.css';

const LORO_TOKEN_ADDRESS = '0x3b3a9A66cD7f5f2dA202E973BB86976162f1C55D';
const UNISWAP_SWAP_URL = `https://app.uniswap.org/swap?chain=sepolia&outputCurrency=${LORO_TOKEN_ADDRESS}`;

export default function SwapWidget() {
  return (
    <section className={styles.shell}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Liquidity Portal</p>
        <h1 className={styles.title}>Swap Into LORO</h1>
        <p className={styles.description}>
          Trade on Sepolia through Uniswap. We open the official swap route with the LORO token preloaded.
        </p>

        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span>Network</span>
            <strong>Ethereum Sepolia</strong>
          </div>
          <div className={styles.metaItem}>
            <span>Token</span>
            <strong>LORO</strong>
          </div>
        </div>

        <div className={styles.actions}>
          <a className={styles.primary} href={UNISWAP_SWAP_URL} target='_blank' rel='noreferrer'>
            Open Uniswap
          </a>
          <Link className={styles.secondary} href='/loroBalance'>
            View Wallet Balances
          </Link>
        </div>

        <p className={styles.note}>Always verify token contracts before swapping.</p>
      </div>
    </section>
  );
}
