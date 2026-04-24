import styles from '../styles/NftMinter.module.css';
import { useEffect, useMemo, useState } from 'react';
import { Contract, utils } from 'ethers';
import { useAccount, useSigner } from 'wagmi';
import Image from 'next/image';
import nftAbi from '../pages/abi/nftAbi.json';

export default function NftMinter({
  contractAddress = process.env.NEXT_PUBLIC_PANDEMONIUM_ADDRESS || process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS || '',
  tokenUri = 'ipfs://bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4',
  abi = nftAbi,
  contentSrc = 'https://nftstorage.link/ipfs/bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4',
  contentType = 'image',
}) {
  const { address, isDisconnected } = useAccount();
  const { data: signer } = useSigner();
  const [txHash, setTxHash] = useState();
  const [isMinting, setIsMinting] = useState(false);
  const [manualContractAddress, setManualContractAddress] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem('pandemonium_contract_address') || '';
    if (stored) setManualContractAddress(stored);
  }, []);

  const effectiveContractAddress = manualContractAddress || contractAddress;

  const hasValidContractAddress = utils.isAddress(effectiveContractAddress);

  const nftContract = useMemo(() => {
    if (!signer || !hasValidContractAddress) return null;
    return new Contract(effectiveContractAddress, abi, signer);
  }, [abi, effectiveContractAddress, hasValidContractAddress, signer]);

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

  const saveManualAddress = () => {
    if (typeof window === 'undefined') return;
    if (!utils.isAddress(manualContractAddress)) return;
    window.localStorage.setItem('pandemonium_contract_address', manualContractAddress);
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
            <Image src={contentSrc} className={styles.nft_media} alt='Pandemonium NFT preview' width={640} height={640} />
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
            This NFT is on SEPOLIA. You&apos;ll need some test Sepolia ETH to mint the NFT.{' '}
            <a href='https://cloud.google.com/application/web3/faucet/ethereum/sepolia'>Get some here</a>.
          </p>
          {isDisconnected ? (
            <p>Connect your wallet to get started</p>
          ) : !hasValidContractAddress ? (
            <div>
              <p>Set a valid contract address to enable minting on Sepolia.</p>
              <input
                className={styles.contract_input}
                value={manualContractAddress}
                onChange={(e) => setManualContractAddress(e.target.value.trim())}
                placeholder='0x...'
              />
              <button className={styles.button} onClick={saveManualAddress} disabled={!utils.isAddress(manualContractAddress)}>
                Save Address
              </button>
              <p className={styles.contract_hint}>Env keys supported: `NEXT_PUBLIC_PANDEMONIUM_ADDRESS` or `NEXT_PUBLIC_NFT_CONTRACT_ADDRESS`</p>
            </div>
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
              <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target='_blank' rel='noreferrer'>
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
