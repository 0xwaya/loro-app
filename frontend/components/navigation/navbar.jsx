import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="./">
                <Image
                    className={styles.macaw_logo}
                    src="/loro-logo.png"
                    width={50}
                    height={50}
                    alt="Loro coin logo"
                />
            </a>
            <ConnectButton></ConnectButton>
        </nav>
    );
}
