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
        <p>
          The Macaw Collection That Gives Back
        </p>
      </header>

      <div className={styles.story_container}>
        <div className={styles.story_container}>
          <p>
            Once upon a time, in a lush, vibrant rainforest, there lived a spectacular pack of screeching macaws called the Pandemonium. Each macaw, with its unique and striking colors, soared through the skies, captivating the hearts of all who encountered them. Little did anyone know, these macaws held the power to not only captivate but also bring people together for a greater purpose.
          </p>
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
        <p>built by 0xwaya powered by VERCEL <br></br>EXPERIMENTAL USE ONLY!!<br></br>© 2023 wayalabs.nft</p>
      </div>
    </div >
  );
}
