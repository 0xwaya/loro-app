import styles from "../styles/Balance.module.css";
import TokensBalanceDisplay from "../components/TokensBalanceDisplay";


export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <TokensBalanceDisplay> </TokensBalanceDisplay>
      </main>
    </div>
  );
}
