import styles from "../styles/NftMinter.module.css";
import NftMinter from "../components/NftMinter";


export default function Home() {

  return (
    <div>
      <main className={styles.main}>
        <NftMinter 
          contractAddress = "0xc93cE0A6e36aeAf1B5164693DC8EC2617Aefe063"
          tokenUri = "ipfs://bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4"
          abi= "./pages/abi/nftAbi.json"
          contentSrc = "https://nftstorage.link/ipfs/bafybeihzebqbqlmjbvdpunmrq7s733gh76avhonjmlhbov4gb2teibfng4"
          contentType = "image"
        />
      </main>
    </div>
  );
}
