import Link from 'next/link';

export default function LoroCoinPage() {
  return (
    <section className='simplePage'>
      <p className='simpleEyebrow'>Token Surface</p>
      <h1>Loro Coin</h1>
      <p>
        LORO is the utility meme token in this ecosystem. Use the balance view to inspect holdings and the swap portal to route
        liquidity actions.
      </p>
      <div className='simpleActions'>
        <Link href='/loroBalance' className='simplePrimary'>
          Check Balances
        </Link>
        <Link href='/swap' className='simpleSecondary'>
          Open Swap
        </Link>
      </div>
    </section>
  );
}
