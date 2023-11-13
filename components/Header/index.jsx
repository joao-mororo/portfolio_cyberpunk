import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.main}>
      <div style={{ width: "30%" }}>
        <h1 style={{ color: "var(--color-primary)" }}>João Mororó</h1>
      </div>
      <div className={styles.nav}>
        <Link href={"/"}>Home</Link>
        <Link href={"/github"}>Github</Link>
      </div>
    </div>
  );
};

export default Header;
