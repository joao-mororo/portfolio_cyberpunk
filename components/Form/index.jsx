"use client";

import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../Button";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const submit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <form className={styles.main} onSubmit={submit}>
      <div className={styles.input_container}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Escreva uma mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <Button type={"submit"}>Enviar</Button>
    </form>
  );
};

export default Form;
