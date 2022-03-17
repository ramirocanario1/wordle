import React from "react";
import styles from "../styles/TextInput.module.css";
import { MdSend } from "react-icons/md";

export default function TextInput({ word, setWord, wordLength, addTry }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (wordLength === word.length) {
      addTry(word);
      setWord("");
    } else {
      console.log("Wrong length");
    }
  }

  function handleChange(e) {
    setWord(e.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        onChange={handleChange}
        value={word}
        className={styles.input}
      />
      <button className={styles.button}>
        <MdSend className={styles.send_icon} />
      </button>
    </form>
  );
}
