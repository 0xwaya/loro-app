import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";


export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="./">
				<img className={styles.macaw_logo} src="/loro-logo.png"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
