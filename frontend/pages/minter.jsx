import styles from "../styles/NftMinter.module.css";
import NftMinter from "../components/NftMinter";


export default function Home() {

  return (
    <div>
      <main className={styles.main}>
        <NftMinter />
      </main>
    </div>
  );
}
