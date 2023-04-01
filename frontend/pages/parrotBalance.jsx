import styles from "../styles/TokensBalanceDisplay.module.css";
import TokensBalanceDisplay from "../components/TokensBalanceDisplay";


export default function Home() {
  return (
    <div>
      <main className={styles.main}>s
        <TokensBalanceDisplay walletAddress={"0x9d2c4cA62900783c29b889B8b4E7A7e23fc59B59"} chain={"OPTIMISM_GOERLI"} />
      </main>
    </div>
  );
}
