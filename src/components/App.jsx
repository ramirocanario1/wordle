import React, { useEffect, useState } from "react";
import styles from "../styles/App.module.css";
import Tries from "./Tries";
import Input from "./Input";

export default function App() {
  const [word, setWord] = useState("JABON");
  const [tries, setTries] = useState([]);

  function addTry(word) {
    setTries([...tries, word]);
    console.log(`We added a new try: ${word}`);
  }

  useEffect(() => {}, [tries]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wordle!</h1>
      <Tries word={word} tries={tries} />
      <Input
        addTry={addTry}
        wordLength={word.length}
        tries={tries}
        secretWord={word}
      />
    </div>
  );
}
