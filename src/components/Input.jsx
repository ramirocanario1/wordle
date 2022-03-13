import React, { useState } from "react";
import styles from "../styles/Input.module.css";
import Keyboard from "./Keyboard";
import TextInput from "./TextInput";

export default function Input({ addTry, wordLength, tries, secretWord }) {
  const [word, setWord] = useState("");
  return (
    <div className={styles.container}>
      <TextInput
        word={word}
        setWord={setWord}
        wordLength={wordLength}
        addTry={addTry}
      />
      <Keyboard tries={tries} secretWord={secretWord} />
    </div>
  );
}
