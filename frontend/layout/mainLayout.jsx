import Head from 'next/head';
import Navbar from '../components/navigation/navbar';

export default function MainLayout({ children }) {
  return (
    <div className='siteShell'>
      <Head>
        <title>Loro App</title>
        <meta name='description' content='Hold a Macaw to win Loro' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='atmosphere' aria-hidden='true'>
        <span className='orb orbA'></span>
        <span className='orb orbB'></span>
        <span className='orb orbC'></span>
      </div>
      <Navbar />
      <main className='contentShell'>{children}</main>
    </div>
  );
}
