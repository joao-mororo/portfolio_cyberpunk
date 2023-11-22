"use client";

import { Animator, Text } from "@arwes/react";

const Typewriter = ({ children, as = "p", speed = 1.5 }) => {
  return (
    <Animator active duration={{ enter: speed, exit: 1.5 }}>
      <Text as={as} manager="sequence" easing="outSine" fixed>
        {children}
      </Text>
    </Animator>
  );
};

export default Typewriter;
