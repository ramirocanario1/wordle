import React, { useEffect, useState } from "react";
import styles from "../styles/App.module.css";
import Tries from "./Tries";
import Input from "./Input";

import { WORDS } from "../../data/words";

export default function App() {
  const [word, setWord] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [tries, setTries] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  const lostTemplate = (
    <div className={styles.lost_container}>
      <h1>You lost the game!</h1>
      <span>
        Secret word: <span className={styles.secret_word}>{word}</span>{" "}
      </span>
    </div>
  );
  const wonTemplate = (
    <div className={styles.won_container}>
      <h1>You won the game!</h1>
      <span>
        Attempts: <span className={styles.tries}>{tries.length}</span>{" "}
      </span>
    </div>
  );

  function addTry(word) {
    setTries([...tries, word]);
  }

  useEffect(() => {
    tries.map((w) => {
      if (word === w) {
        setWon(true);
      }
    });

    if ((tries.length === 6) & !won) {
      setLost(true);
      return;
    }
  }, [tries]);

  let finishedTemplate = "";
  if (won) {
    finishedTemplate = wonTemplate;
  } else if (lost) {
    finishedTemplate = lostTemplate;
  } else {
    finishedTemplate = (
      <Input
        addTry={addTry}
        wordLength={word.length}
        tries={tries}
        secretWord={word}
      />
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wordle!</h1>
      <Tries word={word} tries={tries} />
      {finishedTemplate}
    </div>
  );
}
