"use client";

import React, { useState, useEffect } from "react";

const BlinkingText = ({
  children,
  style,
  className,
  color = "var(--color-text)",
}) => {
  const [blinkingText, setBlinkingText] = useState("");
  const text = children;

  const off = {
    color: "gray",
  };

  const on = {
    color: "#fff",
    textShadow: `
        0 0 5px #fff, 
        0 0 10px #fff, 
        0 0 20px #fff, 
        0 0 40px ${color}, 
        0 0 80px ${color}, 
        0 0 90px ${color}, 
        0 0 100px ${color}, 
        0 0 150px ${color}`,
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newText = text.split("").map((char, i) => {
        // 50% de chance de mudar a cor para cinza
        const shouldBlink = Math.random() < 0.2;
        return (
          <span key={i} style={shouldBlink ? off : on}>
            {char}
          </span>
        );
      });

      setBlinkingText(newText);
    }, 1000); // intervalo entre as piscadas, você pode ajustar conforme necessário

    return () => clearInterval(intervalId);
  });

  return (
    <div className={className} style={style}>
      {blinkingText}
    </div>
  );
};

export default BlinkingText;
