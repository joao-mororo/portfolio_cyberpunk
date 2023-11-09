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
        <h1>João Mororó</h1>
      </div>
      <div className={styles.wrapper}>
        <ul className={styles.socials_list}>
          <li>
            <a href="https://github.com/joao-mororo" target="_blank">
              <BsGithub /> joao-mororo
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/joaovitormororo/"
              target="_blank"
            >
              <BsLinkedin /> joaovitormororo
            </a>
          </li>
          <li>
            <a onClick={() => copyDiscord()} style={{ cursor: "pointer" }}>
              <BsDiscord /> sleepingbtw
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.wrapper}>footer</div>
    </footer>
  );
};

export default Footer;
