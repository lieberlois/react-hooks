import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import NumberList from "../components/callback/List";
import { useState, useCallback } from "react";

export default function UseCallback() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false);

  // useCallback is needed, since the function is created on each render.
  // When toggle changes, the function is recreated and the props of List.js change aswell.

  // Difference to useMemo: memoizes the function, not the result (check type of getItems)
  const getItems = useCallback(
    (offset) => {
      return [number + offset, number + 1 + offset, number + 2 + offset];
    },
    [number]
  );

  // With this code, getItems gets recreated on every render.
  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // }

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

        <div>
          <h2>Number is {number}</h2>
          <button
            onClick={() => setNumber(number + 1)}
            style={{ width: "100%" }}
          >
            Increment
          </button>
        </div>

        <div>
          <h2>Toggle: {toggle ? "On" : "Off"}</h2>
          <button
            onClick={() => setToggle((toggle) => !toggle)}
            style={{ width: "100%" }}
          >
            Toggle
          </button>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2>Zahlen</h2>
          <NumberList getItems={getItems} />
        </div>
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
