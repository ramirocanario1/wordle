import React, { useEffect, useState } from "react";
import styles from "../styles/Row.module.css";

export default function Row({ letters, tryWord, secretWord }) {
  function paintCell(letter, position) {
    if (secretWord[position] === letter) {
      return "green";
    } else if (secretWord.split("").some((l) => l === letter)) {
      return "yellow";
    } else {
      return "gray";
    }
  }

  let emptyRow = [];
  if (tryWord === undefined) {
    for (let i = 0; i < secretWord.length; ++i) {
      emptyRow.push(
        <td key={i} className={styles.gray}>
          {" "}
        </td>
      );
    }
    return <tr className={styles.row}>{emptyRow}</tr>;
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
