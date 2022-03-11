import React, { useEffect, useState } from "react";
import styles from "../styles/App.module.css";
import Tries from "./Tries";
import Input from "./Input";

export default function App() {
  const [word, setWord] = useState("world");
  const [tries, setTries] = useState([]);

  function addTry(word) {
    setTries([...tries, word]);
    console.log(`We added a new try: ${word}`);
  }

  useEffect(() => {
    console.log(tries);
  }, [tries]);

  return (
    <div>
      <Tries word={word} tries={tries} />
      <Input addTry={addTry} wordLength={word.length} />
    </div>
  );
}
