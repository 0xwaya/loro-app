import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";

export default function InstructionsComponent() {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <h1>
          pandemonium<span>squad</span>
        </h1>
        <p>
          lottery reward to a random holder on every mint/sale <span>Parrot-Lotto</span>
        </p>
      </header>

      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
          href={"./squadInfo"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Macaw collection</p>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"./minter"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>Macaw Minter</p>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"./parrotBalance"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}  
            <p>Parrot Coin</p>
          </div>
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons_container}>
          <div>
            <a
              href="https://github.com/0xwaya/pandemonium-app"
              target={"_blank"}
            >
              Leave a star on Github
            </a>
          </div>
          <div>
            <a href="https://twitter.com/pandemoniumnfts" target={"_blank"}>
              Follow us on Twitter
            </a>
          </div>
        </div>
        <p>built by Waya Labs powered by Alchemy create-web3-DApp </p>
      </div>
    </div>
  );
}
