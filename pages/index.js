import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Hooks</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>React Hooks</h1>

        <div className={styles.grid}>
          <Link href="/usecontext">
            <a className={styles.card}>
              <h3>Use Context &rarr;</h3>
              <p>Anwendung und Custom Hooks für React Context.</p>
            </a>
          </Link>
          <Link href="/usememo">
            <a className={styles.card}>
              <h3>Use Memo &rarr;</h3>
              <p>Memoizing und der useMemo-Hook in Anwendung.</p>
            </a>
          </Link>
          <Link href="/usecallback">
            <a className={styles.card}>
              <h3>Use Callback &rarr;</h3>
              <p>Memoized Functions und der useCallback-Hook in Anwendung.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
