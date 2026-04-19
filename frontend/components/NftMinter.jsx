import styles from '../styles/NftMinter.module.css';
import { useMemo, useState } from 'react';
import { Contract } from 'ethers';
import { useAccount, useSigner } from 'wagmi';
import Image from 'next/image';
import nftAbi from '../pages/abi/nftAbi.json';

export default function NftMinter({
  contractAddress = '0xc93cE0A6e36aeAf1B5164693DC8EC2617Aefe063',
  tokenUri = 'ipfs://bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4',
  abi = nftAbi,
  contentSrc = 'https://nftstorage.link/ipfs/bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4',
  contentType = 'image',
}) {
  const { address, isDisconnected } = useAccount();
  const { data: signer } = useSigner();
  const [txHash, setTxHash] = useState();
  const [isMinting, setIsMinting] = useState(false);

  const nftContract = useMemo(() => {
    if (!signer) return null;
    return new Contract(contractAddress, abi, signer);
  }, [abi, contractAddress, signer]);

  const mintNFT = async () => {
    if (!nftContract || !address) return;

    try {
      setIsMinting(true);
      const mintTx = await nftContract.safeMint(address, tokenUri);
      setTxHash(mintTx?.hash);
      await mintTx.wait();
      setIsMinting(false);
      setTxHash(null);
    } catch (e) {
      console.log(e);
      setIsMinting(false);
    }
  };

  return (
    <div className={styles.page_flexBox}>
      <div className={styles.page_container}>
        <div className={styles.nft_media_container}>
          {contentType === 'video' ? (
            <video className={styles.nft_media} autoPlay={true}>
              <source src={contentSrc} type='video/mp4' />
            </video>
          ) : (
            <img src={contentSrc} className={styles.nft_media} alt='Pandemonium NFT preview' />
          )}
        </div>

        <div className={styles.nft_info}>
          <h1 className={styles.nft_title}>PANDEMONIUM</h1>
          <h3 className={styles.nft_author}>By wayalabs.nft</h3>
          <p className={styles.text}>
            PANDEMONIUM is a collection of 10,000 unique MACAW NFTs designed to reward the community.
            The NFTs holder will have unique perks and rewards, including access to the private discord
            channel, and lottery airdrops to a random holder on every new mint.
          </p>
          <hr className={styles.break} />
          <h3 className={styles.nft_instructions_title}>INSTRUCTIONS</h3>
          <p className={styles.text}>
            This NFT is on OPTIMISM GOERLI. You&apos;ll need some test GOERLI to mint the NFT.{' '}
            <a href='https://faucet.goerli.mudit.blog/'>Get some here</a>.
          </p>
          {isDisconnected ? (
            <p>Connect your wallet to get started</p>
          ) : !txHash ? (
            <button
              className={`${styles.button} ${isMinting ? styles.isMinting : ''}`}
              disabled={isMinting || !nftContract}
              onClick={async () => await mintNFT()}
            >
              {isMinting ? 'Minting' : 'Mint Now'}
            </button>
          ) : (
            <div>
              <h3 className={styles.attribute_input_label}>TX ADDRESS</h3>
              <a href={`https://goerli.etherscan.com/tx/${txHash}`} target='_blank' rel='noreferrer'>
                <div className={styles.address_container}>
                  <div>
                    {txHash.slice(0, 6)}...{txHash.slice(6, 10)}
                  </div>
                  <Image src='/etherscan.png' width={20} height={20} alt='View on Etherscan' />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
