import Link from 'next/link';

export default function LotteryPage() {
  return (
    <section className='simplePage'>
      <p className='simpleEyebrow'>Junglebook / Lottery</p>
      <h1>Lottery Rewards</h1>
      <p>
        Every mint strengthens the community loop: holders enter a randomized prize cycle powered by onchain selection logic.
        This page is now the live destination for the restored lottery nav link.
      </p>
      <div className='simpleActions'>
        <Link href='/minter' className='simplePrimary'>
          Mint to Enter
        </Link>
        <Link href='/squadInfo' className='simpleSecondary'>
          Squad Details
        </Link>
      </div>
    </section>
  );
}
