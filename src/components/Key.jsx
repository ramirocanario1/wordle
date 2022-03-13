import React, { useEffect, useState } from "react";
import styles from "../styles/Key.module.css";

export default function Key({ letter, tries = [], secretWord }) {
  const [color, setColor] = useState("default");

  // from https://stackoverflow.com/questions/10710345/finding-all-indexes-of-a-specified-character-within-a-string
  function getLocations(substring, string) {
    var a = [],
      i = -1;
    while ((i = string.indexOf(substring, i + 1)) >= 0) a.push(i);
    return a;
  }

  function getColor() {
    if (tries.join("").includes(letter)) {
      for (const word of tries) {
        if (secretWord.includes(letter)) {
          const locations = getLocations(letter, word);
          for (const position of locations) {
            if (word[position] === secretWord[position]) {
              setColor("green");
              return "";
            } else {
              if (color !== "green") {
                setColor("yellow");
              }
            }
          }
        } else {
          if (color === "default") {
            setColor("gray");
          }
        }
      }
    } else {
      setColor("default");
    }
  }

  useEffect(() => {
    getColor();
    if (letter === "A") {
      console.log(`${letter}: ${color}`);
    }
  }, [tries]);

  return <button className={`${styles.key} ${styles[color]}`}>{letter}</button>;
}
