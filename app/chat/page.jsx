"use client";

import React from "react";
import Form from "./Form";
import styles from "./Chat.module.css";

const Chat = async () => {
  // const messages = await fetch("http://localhost:3000/api/chat/get")
  //   .then((res) => res.json())
  //   .then((res) => res.data);

  return (
    <main className={styles.main}>
      <h1>Chat global</h1>
      <p>
        Aqui você pode deixar uma messagem pública para interagir comigo e com
        todos que vierem até aqui
      </p>
      <br />
      <Form />
      {/* <div>
        {messages &&
          messages.map((data) => (
            <div key={data._id} className={styles.message}>
              <h1>{data.name}</h1>
              <p>{data.message}</p>
            </div>
          ))}
      </div> */}
    </main>
  );
};

export default Chat;
