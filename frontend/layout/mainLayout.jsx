import Head from "next/head";
import Navbar from "../components/navigation/navbar";


export default function MainLayout({ children }) {
	return (
		<div>
			<Head>
				<title>Loro App</title>
				<meta name="description" content="Hold a Macaw to win Loro" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="./public/favicon.ico" />
			</Head>
			<Navbar />
			{children}
		</div>
	);
}
