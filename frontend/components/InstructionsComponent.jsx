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
        <div className={styles.header_container + "li" }>
        <li>10% of all sales go to the Macaw Conservation Fund</li>
        <li>10% of all sales go to the NFT designers</li>
        <li>10% of all sales will be injected into the Parrot Lottery</li>
        <li>ParrotCoin lottery will be drawn every mint, one holder wins</li>
        <li>Special access to the Macaw web3 incubator</li>
        </div>
      </header>

      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
          href={"./squadInfo"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>COLLECTION</p>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"./minter"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>MINTER</p>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"./parrotBalance"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}  
            <p>BALANCE</p>
          </div>
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons_container}>
          <div>
            <a
              href="https://github.com/0xwaya/loro-app"
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
        <p>built by Waya Labs powered by Optimism</p>
      </div>
    </div>
  );
}
