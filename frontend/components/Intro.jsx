import styles from "../styles/Intro.module.css";
import Router, { useRouter } from "next/router";


export default function Intro() {

  const router = useRouter();

  return (

    <div className={styles.container}>
      <header className={styles.header_container}>
        <h1>
          <span>PANDEMONIUM</span>
        </h1>
      </header>

      <div className={styles.story_container}>
        <p>
          When macaws screech, the jungle trembles!
        </p>
        <img
          className={styles.icon}
          style={{ width: "321px", height: "321px" }}
          src="/macaw-angry.png"
        />
      </div>
      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
          href={"./"}
        >
          <div className={styles.button}>
            <p>ENTER</p>
          </div>
        </a>
      </div>
      <br></br>
      <div className={styles.footer}>
        <div className={styles.icons_container}>
          <div>
            <a href="https://github.com" target={"_blank"}>
              <img
                className={styles.icon}
                style={{ width: "29px", height: "29px" }}
                src="/github-color.png"
                alt="Github"
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/pandemoniumnfts" target={"_blank"}>
              <img
                className={styles.icon}
                style={{ width: "26px", height: "26px" }}
                src="/twitter-blue.png"
                alt="Twitter"
              />
            </a>
          </div>
          <div>
            <a href="https://discord.com" target={"_blank"}>
              <img
                className={styles.icon}
                style={{ width: "26px", height: "26px" }}
                src="/discord-color.svg"
                alt="Discord"
              />
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "121px", height: "27px" }}
          src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
          alt="Alchemy Supercharged"
        />
      </a>
      <br></br>
      <div className={styles.footer}>
        <p>
          EXPERIMENTAL USE ONLY! - ETHEREUM GOERLI TESTNET
        </p>
      </div>
      <br></br>

      © 2023 wayalabs.nft

    </div >
  );
}
