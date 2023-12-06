"use client";

import React, { useState } from "react";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, TOASTFY_CONFIG } from "@/data/contants";
import { toast } from "react-toastify";
import styles from "./Form.module.css";

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [isSending, setIsSending] = useState(false);

  const clear = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const submit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      email: email,
      subject: "Nova mensagem do portfólio",
      message: message,
    };

    emailjs
      .send(
        EMAILJS_CONFIG.serviceID,
        EMAILJS_CONFIG.templateID,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )
      .then(
        () => {
          toast.success("Mensagem enviada", TOASTFY_CONFIG);
          clear();
        },
        (err) => {
          toast.error("Erro ao enviar mensagem", TOASTFY_CONFIG);
          console.error(err);
        }
      )
      .finally(() => setIsSending(false));
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
      <Button type={"submit"}>{isSending ? "Enviando..." : "Enviar"}</Button>
    </form>
  );
};

export default Form;
