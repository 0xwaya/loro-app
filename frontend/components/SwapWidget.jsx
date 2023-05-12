import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

let darkMode = true // Dynamically toggle dark mode on and off
export default function Home() {
    return (
        <div className="Uniswap">
            <SwapWidget theme={darkMode ? darkTheme : lightTheme} />
        </div>
    );
}

