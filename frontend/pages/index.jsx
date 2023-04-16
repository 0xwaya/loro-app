import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";



export default function Home() {
  return (
    <div>
      <Head />
      <main className={styles.main}>
       <InstructionsComponent />
       </main>
    </div>
  );
}
