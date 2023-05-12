import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        <a href="https://github.com/yourusername">GitHub</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href="https://twitter.com/yourusername">Twitter</a>
                    </li>
                </ul>
            </div>
            <div className={styles.container}>
                <p className={styles.copy}>&copy; {new Date().getFullYear()} <a href="#">My Website Name</a></p>
            </div>
        </footer>
    )
}

export default Footer