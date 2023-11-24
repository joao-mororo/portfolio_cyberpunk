"use client";

import { Animator } from "@arwes/react";
import React from "react";

const Sequence = ({ children }) => {
  return (
    <Animator active combine manager="sequence">
      {children}
    </Animator>
  );
};

export default Sequence;
