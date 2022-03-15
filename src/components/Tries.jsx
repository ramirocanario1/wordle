import React, { useEffect, useState } from "react";
import styles from "../styles/Tries.module.css";
import Row from "./Row";

export default function Tries({ word, tries }) {
  // const [letters, setLetters] = useState([]);

  // function timesInString(letter, string) {
  //   return string.split(letter).length - 1;
  // }

  // useEffect(() => {
  //   let list = [];
  //   for (let i = 0; i < word.length; ++i) {
  //     list.push({ letter: word[i], amount: timesInString(word[i], word) });
  //   }
  //   setLetters(list);
  // }, []);

  return (
    <div className={styles.container}>
      <table>
        <tbody>
          <Row key={0} tryWord={tries[0]} secretWord={word} />
          <Row key={1} tryWord={tries[1]} secretWord={word} />
          <Row key={2} tryWord={tries[2]} secretWord={word} />
          <Row key={3} tryWord={tries[3]} secretWord={word} />
          <Row key={4} tryWord={tries[4]} secretWord={word} />
          <Row key={5} tryWord={tries[5]} secretWord={word} />
        </tbody>
      </table>
    </div>
  );
}
