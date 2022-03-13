import React from "react";
import styles from "../styles/Row.module.css";

export default function Row({ tryWord, secretWord }) {
  function paintCell(letter, position) {
    if (secretWord[position] === letter) {
      return "green";
    } else if (secretWord.split("").some((l) => l === letter)) {
      return "yellow";
    } else {
      return "gray";
    }
  }

  if (tryWord === undefined) {
    return (
      <tr className={styles.row}>
        <td className={styles.gray}> </td>
        <td className={styles.gray}> </td>
        <td className={styles.gray}> </td>
        <td className={styles.gray}> </td>
        <td className={styles.gray}> </td>
      </tr>
    );
  }

  return (
    <tr className={styles.row}>
      {tryWord.split("").map((letter, index) => (
        <td key={index} className={styles[paintCell(letter, index)]}>
          {letter}
        </td>
      ))}
    </tr>
  );
}
