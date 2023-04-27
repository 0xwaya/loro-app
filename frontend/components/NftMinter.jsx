import styles from "../styles/NftMinter.module.css";
import { Contract } from "alchemy-sdk";
import { useState } from "react";
import { useAccount, useSigner } from "wagmi";


export default function NftMinter({
  contractAddress,
  tokenUri,
  abi,
  contentSrc,
  contentType,
}) {
  // State hook to track the NFT contract ABI
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
    // Log the token URI, contract address, and user's address to the console
    console.log(tokenUri, contractAddress, address);
    // Create a new instance of the NFT contract using the contract address and ABI
    const nftContract = new Contract(contractAddress, nftAbi, signer);
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
            The PANDEMONIUM SQUAD is a collection in testnet of 100 unique MACAW NFTs.
            The Mainnet collection will be 10,000 NFTs.<br/>
            <br/>
            The NFTs holder will have unique perks and rewards, a smart contract lottery
            triggers on every mint, a random winner is selected using Chainlink VRF, the winner will get 100 PARROT coins.<br/>
            <br/>
            The NFTs are generated randomly in the nft engine, and the rarity is determined by the
            number of traits that the NFT has.
          </p>
          <hr className={styles.break} />
          <h3 className={styles.nft_instructions_title}>INSTRUCTIONS</h3>
          <p className={styles.text}>
            This NFT is on GOERLI testnet. You’ll need some ETH_GOERLI to mint the
            NFT. <a href="https://goerli-faucet.pk910.de">Get some here</a>.
          </p>
          <br/>
          <h3 className={styles.nft_instructions_title}>CONTRACTS</h3>
          <p className={styles.text}>
            The PANDEMONIUM contract address is:<br/>
            <b>{"0xc93cE0A6e36aeAf1B5164693DC8EC2617Aefe063"}</b>
          </p>
          <p className={styles.text}>
            The PARROT Coin contract address is:<br/>
            <b>{"0x3b3a9A66cD7f5f2dA202E973BB86976162f1C55D"}</b>
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
                href={`https://goerli.etherscan.com/tx/${txHash}`}
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