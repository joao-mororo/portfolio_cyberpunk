import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, type, onClick, disabled, className }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span
        className={`${styles.decorator} ${styles.top} ${styles.left}`}
      ></span>
      <span
        className={`${styles.decorator} ${styles.top} ${styles.right}`}
      ></span>
      <span
        className={`${styles.decorator} ${styles.bottom} ${styles.left}`}
      ></span>
      <span
        className={`${styles.decorator} ${styles.bottom} ${styles.right}`}
      ></span>
      <span>{children}</span>
    </button>
  );
};

export default Button;
