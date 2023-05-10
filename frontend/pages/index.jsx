import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/Intro";
import Intro from "../components/Intro";



export default function Home() {
    return (
        <div>
            <Head />
            <main className={styles.main}>
                <Intro></Intro>
            </main>
        </div>
    );
}
