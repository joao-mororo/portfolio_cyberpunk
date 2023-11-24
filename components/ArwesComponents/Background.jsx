"use client";

import { Animator, Dots } from "@arwes/react";

const Background = ({ children }) => {
  return (
    <Animator active duration={{ enter: 2, exit: 2 }}>
      <Dots color="hsla(180, 100%, 75%, 0.07)" style={{ zIndex: -5 }} />
      {children}
    </Animator>
  );
};

export default Background;
