import { React } from 'react';
import Head from 'next/head';
import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

export default function Home() {
  return (
    <div>
      <Head />
      <main className="Uniswap">
        <SwapWidget> </SwapWidget>
      </main>
    </div>
  );
}

