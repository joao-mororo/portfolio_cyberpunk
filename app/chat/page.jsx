"use client";

import React from "react";
import Form from "./Form";
import Box from "@/components/Box";
import Typewriter from "@/components/ArwesComponents/Typewriter";
import BlinkingText from "@/components/BlinkingText";
import styles from "./Chat.module.css";

const Chat = async () => {
  const messages = await fetch("api/chat/get", {
    next: { cache: "no-store" },
  })
    .then((res) => res.json())
    .then((res) => res.data);

  return (
    <main className={styles.main}>
      <Typewriter as="h1">Chat global</Typewriter>
      <BlinkingText>• チャット •</BlinkingText>
      <br />
      <Form />
      <hr
        style={{
          width: "50%",
          margin: "2rem 0",
          borderColor: "#ccc",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          gap: "1rem",
        }}
      >
        <Box className={styles.message}>
          <Typewriter as="h2" manager="decipher">
            João Mororó
          </Typewriter>
          <Typewriter as="p">
            Aqui você pode deixar uma messagem pública para interagir comigo e
            com todos que vierem até aqui!
          </Typewriter>
        </Box>
        {messages &&
          messages.map((data) => (
            <Box key={data._id} className={styles.message}>
              <Typewriter as="h2" manager="decipher">
                {data.name}
              </Typewriter>
              <Typewriter as="p">{data.message}</Typewriter>
            </Box>
          ))}
      </div>
    </main>
  );
};

export default Chat;
