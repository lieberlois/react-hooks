import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function UseCallback() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Use Callback</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "30px" }}>
          React Callback
        </h1>

        <h2>
          <Link href="/">
            <a style={{ color: "#0070f3", textDecoration: "underline" }}>
              Home
            </a>
          </Link>
        </h2>
      </main>
    </div>
  );
}
