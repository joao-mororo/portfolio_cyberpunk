"use client";

import React, { useState, useEffect } from "react";

const Typewriter = ({ children, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textToType = flattenChildren(children);

    if (currentIndex < textToType.length) {
      const intervalId = setInterval(() => {
        setDisplayText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [children, speed, currentIndex]);

  const flattenChildren = (children) => {
    return React.Children.toArray(children)
      .map((child) => {
        return typeof child === "string"
          ? child
          : flattenChildren(child.props.children);
      })
      .join("");
  };

  return <>{displayText}</>;
};

export default Typewriter;
