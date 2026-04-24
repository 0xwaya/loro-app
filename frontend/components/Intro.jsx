import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Intro.module.css';

const QUICK_LINKS = [
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Loro Coin', href: '/loro-coin' },
  { label: 'Lottery', href: '/lottery' },
  { label: 'Swap', href: '/swap' },
];

const STORY_CARDS = [
  {
    title: 'Mint + Utility Loop',
    text: 'Mint Macaw NFTs, unlock private community channels, and participate in holder-first airdrop mechanics.',
  },
  {
    title: 'Jungle Treasury',
    text: 'Protocol experiments are focused on conservation-backed storytelling and sustainable meme-token engagement.',
  },
  {
    title: 'Onchain Momentum',
    text: 'Sepolia-first iteration, rapid UI shipping, and modular route architecture built for production hardening.',
  },
];

export default function Intro() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Pandemonium / Loro Ecosystem</p>
        <h1 className={styles.title}>A Jungle-Native Web3 Playground</h1>
        <p className={styles.subtitle}>
          Mint MACAW NFTs, monitor token balances, and route into swap + lottery flows from one interface.
        </p>

        <div className={styles.primaryCtas}>
          <Link href='/minter' className={styles.ctaPrimary}>
            Enter NFT Minter
          </Link>
          <Link href='/swap' className={styles.ctaGhost}>
            Open Swap Portal
          </Link>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.imageHalo}></div>
        <Image src='/macaw-angry.png' width={380} height={380} alt='Macaw mascot' priority />
      </div>

      <div className={styles.cardGrid}>
        {STORY_CARDS.map((card) => (
          <article key={card.title} className={styles.card}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.footerRow}>
        <div className={styles.iconLinks}>
          <a href='https://github.com' target='_blank' rel='noreferrer'>
            <Image className={styles.icon} width={28} height={28} src='/github-color.png' alt='Github' />
          </a>
          <a href='https://twitter.com/pandemoniumnfts' target='_blank' rel='noreferrer'>
            <Image className={styles.icon} width={28} height={28} src='/twitter-blue.png' alt='Twitter' />
          </a>
          <a href='https://discord.com' target='_blank' rel='noreferrer'>
            <Image className={styles.icon} width={28} height={28} src='/discord-color.svg' alt='Discord' />
          </a>
          <a href='https://www.dextools.io/app/en/pairs' target='_blank' rel='noreferrer'>
            <Image className={styles.icon} width={28} height={28} src='/dextools.png' alt='Dextools' />
          </a>
          <a href='https://www.etherscan.io' target='_blank' rel='noreferrer'>
            <Image className={styles.icon} width={28} height={28} src='/etherscan.png' alt='Etherscan' />
          </a>
        </div>

        <div className={styles.quickLinks}>
          {QUICK_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.quickLink}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <p className={styles.badge}>Experimental / Sepolia / 2026 Q2 Build</p>
    </section>
  );
}
