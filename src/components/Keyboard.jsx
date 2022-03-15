import React, { useEffect } from "react";
import styles from "../styles/Keyboard.module.css";
import Key from "./Key";
import { FiDelete } from "react-icons/fi";

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

export default function Keyboard({ tries, secretWord, word, setWord }) {
  function handleClick(e) {
    setWord(word + e.target.value);
  }

  function handleDelete(e) {
    setWord(word.slice(0, -1));
  }

  return (
    <section className={styles.container}>
      <div className={styles.row}>
        {LETTERS.slice(0, 10).map((l) => (
          <Key
            key={l}
            letter={l}
            tries={tries}
            secretWord={secretWord}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className={styles.row}>
        {LETTERS.slice(10, 19).map((l) => (
          <Key
            key={l}
            letter={l}
            tries={tries}
            secretWord={secretWord}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className={styles.row}>
        {LETTERS.slice(19).map((l) => (
          <Key
            key={l}
            letter={l}
            tries={tries}
            secretWord={secretWord}
            handleClick={handleClick}
          />
        ))}
        <button className={styles.delete_key} onClick={handleDelete}>
          {<FiDelete className={styles.delete_icon} />}
        </button>
      </div>
    </section>
  );
}
