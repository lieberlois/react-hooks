import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState, useMemo } from "react";

const slowFunction = (a) => {
  console.log("Called");
  for (let i = 0; i <= 2000000000; i++) {}
  return a ** 2;
};

export default function UseMemo() {
  const [toggle, setToggle] = useState(false);
  const [num, setNum] = useState(0);

  // Cache the value if num (dependency array) stays the same
  // Only recalculate when num changes!
  const number = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  // This code would also recalculate number, when the toggle state changes.
  // const number = slowFunction(num);

  return (
    <div className={styles.container}>
      <Head>
        <title>Use Memo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: "30px" }}>
          React Memo
        </h1>

        <h2>Toggle: {toggle ? "On" : "Off"}</h2>
        <button onClick={() => setToggle((toggle) => !toggle)}>Toggle</button>

        <h2>
          <div>Number: {num}</div>
          <div>Calc Number: {number}</div>
        </h2>
        <button onClick={() => setNum(num + 1)}>Increment</button>

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
