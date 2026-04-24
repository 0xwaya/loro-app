import Link from 'next/link';

export default function SquadInfoPage() {
  return (
    <section className='simplePage'>
      <p className='simpleEyebrow'>Restored Route</p>
      <h1>Squad Info</h1>
      <p>Legacy squad info route restored. Use this as a destination for collection traits, rarity analytics, and holder perks.</p>
      <div className='simpleActions'>
        <Link href='/lottery' className='simplePrimary'>
          Open Lottery Flow
        </Link>
        <Link href='/loro-coin' className='simpleSecondary'>
          View Token Overview
        </Link>
      </div>
    </section>
  );
}
