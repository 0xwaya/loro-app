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
        <div className={styles.story_container}>
          <p>
            When macaws screech, the jungle trembles!
          </p>
        </div>
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
        <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
          <img
            id="badge-button"
            style={{ width: "121px", height: "27px" }}
            src="https://static.alchemyapi.io/images/marketing/badgeLight.png"
            alt="Alchemy Supercharged"
          />
        </a>
        <p>EXPERIMENTAL USE ONLY!!<br></br>© 2023 wayalabs.nft</p>
      </div>
    </div>
  );
}
