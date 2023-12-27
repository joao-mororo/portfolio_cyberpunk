"use client";

import Button from "../Button";
import { IoIosArrowUp } from "react-icons/io";
import styles from "./ToTopButton.module.css";

const ToTopButton = () => {
  const toTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const scrollFunction = () => {
    let mybutton = document.getElementsByClassName("toTopButton")[0];
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  };

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  return (
    <Button className={`${styles.scrollButton} toTopButton`} onClick={toTop}>
      <IoIosArrowUp />
    </Button>
  );
};

export default ToTopButton;
