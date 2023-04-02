import styles from "../styles/NftMinter.module.css";
import { Contract } from "alchemy-sdk";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";
import abi from "../pages/abi/nftAbi.json";


// NFT Minter component
export default function NftMinter({
  contractAddress = "0x828E499F0C302D9492f5DA138Fa84279b8C895b2",
  tokenUri = "ipfs://bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4",
  abi = "./abi/nftAbi.json",
  contentSrc = "https://nftstorage.link/ipfs/bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4",
  contentType = "image",
}) {
  const [nftAbi, setNftAbi] = useState(abi);
  // Get the user's wallet address and status of their connection to it
  const { address, isDisconnected } = useAccount();
  // Get the signer instance for the connected wallet
  const { data: signer } = useSigner();
  // State hooks to track the transaction hash and whether or not the NFT is being minted
  const [txHash, setTxHash] = useState();
  const [isMinting, setIsMinting] = useState(false);

  // Function to mint a new NFT
  const mintNFT = async () => {
    console.log(tokenUri, contractAddress, address);
    // Create a new instance of the NFT contract using the contract address and ABI
    const nftContract = new Contract(contractAddress, abi, signer);
    try {
      // Set isMinting to true to show that the transaction is being processed
      setIsMinting(true);
      // Call the smart contract function to mint a new NFT with the provided token URI and the user's address
      const mintTx = await nftContract.safeMint(address, tokenUri);
      // Set the transaction hash in state to display in the UI
      setTxHash(mintTx?.hash);
      // Wait for the transaction to be processed
      await mintTx.wait();
      // Reset isMinting and txHash in state
      setIsMinting(false);
      setTxHash(null);
    } catch (e) {
      // If an error occurs, log it to the console and reset isMinting to false
      console.log(e);
      setIsMinting(false);
    }
  };
  return (
    <div className={styles.page_flexBox}>
      <div className={styles.page_container}>
        <div className={styles.nft_media_container}>
          {contentType == "video" ? (
            <video className={styles.nft_media} autoPlay={true}>
              <source src={contentSrc} type="video/mp4" />
            </video>
          ) : (
            <img src={contentSrc} className={styles.nft_media} />
          )}
        </div>

        <div className={styles.nft_info}>
          <h1 className={styles.nft_title}>PANDEMONIUM SQUAD</h1>
          <h3 className={styles.nft_author}>By wayalabs.nft</h3>
          <p className={styles.text}>
            The PANDEMONIUM SQUAD is a collection of 10,000 unique NFTs.

            The NFTs holder will have unique perks and rewards, including access
            to the private discord channel, and airdrops of the future
            collections.

            The NFTs are generated randomly, and the rarity is determined by the
            number of traits that the NFT has. The more traits, the more rare the
            NFT is.

            
          </p>
          <hr className={styles.break} />
          <h3 className={styles.nft_instructions_title}>INSTRUCTIONS</h3>
          <p className={styles.text}>
            This NFT is on OPTIMISM GOERLI. You’ll need some test GOERLI to mint the
            NFT. <a href="https://faucet.goerli.mudit.blog/">Get some here</a>.
          </p>
          {isDisconnected ? (
            <p>Connect your wallet to get started</p>
          ) : !txHash ? (
            <button
              className={`${styles.button} ${
                isMinting && `${styles.isMinting}`
              }`}
              disabled={isMinting}
              onClick={async () => await mintNFT()}
            >
              {isMinting ? "Minting" : "Mint Now"}
            </button>
          ) : (
            <div>
              <h3 className={styles.attribute_input_label}>TX ADDRESS</h3>
              <a
                href={`https://mumbai.polygonscan.com/tx/${txHash}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.address_container}>
                  <div>
                    {txHash.slice(0, 6)}...{txHash.slice(6, 10)}
                  </div>
                  <img
                    src={
                      "https://static.alchemyapi.io/images/cw3d/Icon%20Large/etherscan-l.svg"
                    }
                    width="20px"
                    height="20px"
                  />
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}