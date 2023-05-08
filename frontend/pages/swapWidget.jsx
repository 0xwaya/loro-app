import { React } from 'react';
import Head from 'next/head';
import styles from '../styles/SwapWidget.module.css';
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head />
      <main className="Uniswap">
        <SwapWidget> </SwapWidget>
      </main>
    </div>
  );
}

