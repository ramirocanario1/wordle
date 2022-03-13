import React, { useEffect } from "react";
import styles from "../styles/Keyboard.module.css";
import Key from "./Key";

const LETTERS = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

export default function Keyboard({ tries, secretWord }) {
  function paintKey(letter) {}

  return (
    <section className={styles.container}>
      <div className={styles.row}>
        {LETTERS.slice(0, 10).map((l) => (
          <Key key={l} letter={l} tries={tries} secretWord={secretWord} />
        ))}
      </div>
      <div className={styles.row}>
        {LETTERS.slice(10, 19).map((l) => (
          <Key key={l} letter={l} tries={tries} secretWord={secretWord} />
        ))}
      </div>
      <div className={styles.row}>
        {LETTERS.slice(19).map((l) => (
          <Key key={l} letter={l} tries={tries} secretWord={secretWord} />
        ))}
      </div>
    </section>
  );
}
