import Link from 'next/link';
import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styles from '../../styles/Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Mint', href: '/minter' },
  { label: 'Lottery', href: '/lottery' },
  { label: 'Swap', href: '/swap' },
  { label: 'Balances', href: '/loroBalance' },
  { label: 'Roadmap', href: '/roadmap' },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link className={styles.brand} href='/'>
          <Image className={styles.logo} src='/loro-logo.png' alt='Loro coin logo' width={56} height={56} priority />
          <span>LORO</span>
        </Link>

        <div className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.wallet}>
          <ConnectButton />
        </div>
      </nav>
    </header>
  );
}
