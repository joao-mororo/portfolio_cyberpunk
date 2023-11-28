import React from "react";
import styles from "./Box.module.css";

const Box = ({ children, className, as = "div", open, style }) => {
  const As = as;
  return (
    <As className={`${styles.main} ${className}`} style={style} open={open}>
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
      {children}
    </As>
  );
};

export default Box;
