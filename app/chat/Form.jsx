"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { TOASTFY_CONFIG } from "@/data/contants";
import { SiSpinrilla } from "react-icons/si";

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
    <form
      className="flex flex-col gap-4 w-full sm:w-2/3"
      onSubmit={(e) => submit(e)}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Nome</label>
        <input
          className="bg-black text-accent border-none outline-none p-4 resize-none"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Mensagem</label>
        <textarea
          className="bg-black text-accent border-none outline-none p-4 resize-none"
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
        {isSending ? (
          <span>
            <SiSpinrilla className="animate-spin" /> Enviando...
          </span>
        ) : (
          <span>Enviar</span>
        )}
      </Button>
    </form>
  );
};

export default Form;
