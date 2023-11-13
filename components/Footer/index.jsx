"use client";

import React from "react";
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { toast } from "react-toastify";
import { TOASTFY_CONFIG } from "@/data/contants";
import styles from "./Footer.module.css";

const Footer = () => {
  const copyDiscord = () => {
    navigator.clipboard.writeText("sleepingbtw");
    console.log("Usuário copiado");
    toast.info("Usuário copiado", TOASTFY_CONFIG);
  };

  return (
    <footer className={styles.main}>
      <div className={styles.wrapper}>
        powered by<h1>João Mororó</h1>all rights reserved
      </div>
      <div className={styles.wrapper}>
        <a href="https://github.com/joao-mororo" target="_blank">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/joaovitormororo/" target="_blank">
          <BsLinkedin />
        </a>
        <a onClick={() => copyDiscord()} style={{ cursor: "pointer" }}>
          <BsDiscord />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
