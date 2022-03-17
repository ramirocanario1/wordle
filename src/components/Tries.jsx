import React, { useEffect, useState } from "react";
import styles from "../styles/Tries.module.css";
import Row from "./Row";

export default function Tries({ word, tries }) {
  const [remainingLetters, setRemainingLetters] = useState({});

  useEffect(() => {
    let register = {};
    word.split("").map((letter) => {
      if (register[letter] === undefined) {
        register[letter] = 1;
      } else {
        ++register[letter];
      }
    });
    // console.log(word);
    // console.log(register);
    setRemainingLetters(register);
  }, []);

  // function useLetter(letter) {
  //   let register = remainingLetters;
  //   --register[letter];
  //   setRemainingLetters(register);
  // }

  function useLetter(letter) {
    let register = { ...remainingLetters };
    --register[letter];
    setRemainingLetters(register);
  }

  function getRemainingLetter(letter) {
    return remainingLetters[letter];
  }

  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <Row
            key={0}
            tryWord={tries[0]}
            secretWord={word}
            useLetter={useLetter}
            getRemainingLetter={getRemainingLetter}
          />
          <Row
            key={1}
            tryWord={tries[1]}
            secretWord={word}
            useLetter={useLetter}
            getRemainingLetter={getRemainingLetter}
          />
          <Row
            key={2}
            tryWord={tries[2]}
            secretWord={word}
            useLetter={useLetter}
            getRemainingLetter={getRemainingLetter}
          />
          <Row
            key={3}
            tryWord={tries[3]}
            secretWord={word}
            useLetter={useLetter}
            getRemainingLetter={getRemainingLetter}
          />
          <Row
            key={4}
            tryWord={tries[4]}
            secretWord={word}
            useLetter={useLetter}
            getRemainingLetter={getRemainingLetter}
          />
          <Row
            key={5}
            tryWord={tries[5]}
            secretWord={word}
            useLetter={useLetter}
            getRemainingLetter={getRemainingLetter}
          />
        </tbody>
      </table>
    </div>
  );
}
