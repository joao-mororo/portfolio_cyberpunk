import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <div style={{ width: "30%" }}>
        <h1 style={{ color: "var(--color-primary)" }}>João Mororó</h1>
      </div>
      <div className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">Sobre mim</a>
        <a href="#project">Projetos</a>
        <a href="#contact">Contato</a>
      </div>
    </div>
  );
};

export default Header;
