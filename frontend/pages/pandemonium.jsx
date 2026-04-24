import Link from 'next/link';

export default function PandemoniumPage() {
  return (
    <section className='simplePage'>
      <p className='simpleEyebrow'>Restored Route</p>
      <h1>Pandemonium Hub</h1>
      <p>This legacy route has been restored and now points to the updated minter and ecosystem flows.</p>
      <div className='simpleActions'>
        <Link href='/minter' className='simplePrimary'>
          Open Minter
        </Link>
        <Link href='/' className='simpleSecondary'>
          Return Home
        </Link>
      </div>
    </section>
  );
}
