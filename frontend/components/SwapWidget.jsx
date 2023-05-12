import { SwapWidget } from '@uniswap/widgets'
import styles from '../styles/SwapWidget.module.css';
import '@uniswap/widgets/fonts.css'

export default function SwapWidget() {
    return (
        <div className={styles.container}>
            <Head />
            <main className="Uniswap">
                <SwapWidget />
            </main>
        </div>
    );
}
