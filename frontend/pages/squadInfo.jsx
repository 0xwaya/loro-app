import styles from "../styles/NftCollectionInfo.module.css";
import NftCollectionInfoDisplay from "../components/NftCollectionInfoDisplay";


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NftCollectionInfoDisplay collectionAddress={"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"}/>
      </main>
    </div>
  );
}
