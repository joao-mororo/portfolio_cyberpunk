import React from "react";
import Form from "./Form";
import styles from "./Chat.module.css";

const Chat = async () => {
  // const messages = await fetch("api/chat/get", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  return (
    <main className={styles.main}>
      <h1>Chat global</h1>
      <p>
        Aqui você pode deixar uma messagem pública para interagir comigo e com
        todos que vierem até aqui
      </p>
      <br />
      <Form />
    </main>
  );
};

export default Chat;
