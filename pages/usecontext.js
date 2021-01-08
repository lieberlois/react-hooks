import Head from "next/head";
import Count from "../components/context/Count";
import Incrementor from "../components/context/Incrementor";
import { CountProvider } from "../context/CountContext";
import styles from "../styles/Home.module.css";

export default function UseContext() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Use Context</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "30px" }}>
          React Context
        </h1>

        <CountProvider>
          <Count name="A" />
          <Count name="B" />
          <Count name="C" />
          <Incrementor />
        </CountProvider>
      </main>
    </div>
  );
}
