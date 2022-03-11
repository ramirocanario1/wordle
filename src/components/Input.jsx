import React, { useState } from "react";
import styles from "../styles/Input.module.css";

export default function Input({ addTry, wordLength }) {
  const [word, setWord] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (wordLength === word.length) {
      addTry(word);
      setWord("");
    } else {
      console.log("Wrong lenght!");
    }
  }

  function handleChange(e) {
    setWord(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write your try"
        onChange={handleChange}
        value={word}
      />
      <button>Try!</button>
    </form>
  );
}
