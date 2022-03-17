import React, { useEffect, useState } from "react";
import styles from "../styles/App.module.css";
import Tries from "./Tries";
import Input from "./Input";

import "../styles/Modals.css";
import swal from "sweetalert";

import { WORDS } from "../../data/words";

export default function App() {
  // STATES
  const [word, setWord] = useState(
    WORDS[Math.floor(Math.random() * WORDS.length)]
  );
  const [tries, setTries] = useState([]);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);
  const [victories, setVictories] = useState(0);

  // FUNCTIONS
  function addTry(word) {
    if (!won) {
      setTries([...tries, word]);
    } else {
      console.log("You already won the game!");
    }
  }

  function playAgain() {
    setTries([]);
    setWon(false);
    setLost(false);
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }

  console.log(word);

  // VERIFYING WIN AND LOSE
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

  useEffect(() => {
    if (won) {
      setVictories(victories + 1);
    }
    console.log(`Streak: ${victories} victories!`);
  }, [won]);

  useEffect(() => {
    if (lost) {
      setVictories(0);
    }
    console.log(`Streak: ${victories} victories!`);
  }, [lost]);

  // ALERTS
  if (lost & (tries.length !== 0)) {
    swal({
      title: "You lost the game!",
      text: `Secret word: ${word}`,
      icon: "error",
      buttons: {
        back: { text: "Cancel", className: "cancel-button" },
        retry: { text: "Play again", className: "retry-button" },
      },
    }).then((value) => {
      if (value === "retry") {
        playAgain();
      }
    });
  }
  if (won & (tries.length !== 0)) {
    swal({
      title: "You won the game!",
      text: `Streak: ${victories}`,
      icon: "success",
      buttons: {
        back: { text: "Cancel", className: "cancel-button" },
        retry: { text: "Play again", className: "retry-button" },
      },
    }).then((value) => {
      if (value === "retry") {
        playAgain();
      }
    });
  }

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
