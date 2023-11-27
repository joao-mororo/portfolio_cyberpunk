"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { TOASTFY_CONFIG } from "@/data/contants";
import styles from "./Chat.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const cleatInputs = () => {
    setName("");
    setMessage("");
  };

  const submit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await fetch("api/chat/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          message: message,
        }),
      }).then(async (res) => {
        const result = await res.json();

        // trocar os alerts por toasts
        if (result.status === 201) {
          toast.success(result.message, TOASTFY_CONFIG);
          router.refresh();
        } else {
          toast.error(result.message, TOASTFY_CONFIG);
        }

        setIsSending(false);
        cleatInputs();
      });
    } catch (error) {
      console.error(error);
      setIsSending(false);
      cleatInputs();
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => submit(e)}>
      <div className={styles.input_container}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <Button type="submit" disabled={isSending}>
        {isSending ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
};

export default Form;
