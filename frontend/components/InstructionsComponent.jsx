import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";


export default function InstructionsComponent() {

  const router = useRouter();

  return (

    <div className={styles.container}>
      <header className={styles.header_container}>
        <h1>
          <span>PANDEMONIUM</span>
        </h1>
      </header>

      <div className={styles.story_container}>
        <div className={styles.story_container}>
          <p>
            In a colorful rainforest, some cool and savvy macaws invented the Loro coin to unite the animals for reforestation and to allow them to buy stuff with their unique NFTs. They became the Robin Hoods of the jungle, with a currency not backed by gold, but by feathers!          </p>
        </div>
      </div>

      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
          href={"./minter"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>MINT</p>
          </div>
        </a>
        <a
          target={"_blank"}
          href={"./swapWidget"}
        >
          <div className={styles.button}>
            {/* <img src="https://static.alchemyapi.io/images/cw3d/Icon%20Medium/lightning-square-contained-m.svg" width={"20px"} height={"20px"} /> */}
            <p>SWAP</p>
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
        <p>powered by Alchemy <br></br>EXPERIMENTAL USE ONLY!!<br></br>© 2023 wayalabs.nft</p>
      </div>
    </div >
  );
}
