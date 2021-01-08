import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>React Hook Summary</h1>

        <div className={styles.grid}>
          <a href="/usecontext" className={styles.card}>
            <h3>Use Context &rarr;</h3>
            <p>Anwendung und Custom Hooks für React Context.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
