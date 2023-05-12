import styles from "../styles/Intro.module.css";
import Router, { useRouter } from "next/router";
import Image from 'next/image';

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
        <Image
          src="/macaw-angry.png"
          width={321}
          height={321}
          alt="Macaw"
        />
      </div>
      <div className={styles.buttons_container}>
        <a
          target={"_blank"}
          href={"./swapWidget"}
        >
          <div className={styles.button}>
            <p>macaw nft</p>
          </div>
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.icons_container}>
          <div>
            <a href="https://github.com" target={"_blank"}>
              <Image
                className={styles.icon}
                width={29}
                height={29}
                src="/github-color.png"
                alt="Github"
              />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/pandemoniumnfts" target={"_blank"}>
              <Image
                className={styles.icon}
                width={26}
                height={26}
                src="/twitter-blue.png"
                alt="Twitter"
              />
            </a>
          </div>
          <div>
            <a href="https://discord.com" target={"_blank"}>
              <Image
                className={styles.icon}
                width={26}
                height={26}
                src="/discord-color.svg"
                alt="Discord"
              />
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
        <Image
          id="badge-button"
          width={121}
          height={27}
          src="/alchemy.png"
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
