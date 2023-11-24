"use client";

import useIsVisible from "@/hooks/useIsVisible";
import { Animator, Text } from "@arwes/react";
import { useRef } from "react";

const Typewriter = ({
  children,
  as = "p",
  speed = 1.5,
  manager = "sequence",
}) => {
  return (
    <Animator active duration={{ enter: speed }}>
      <Text as={as} manager={manager} easing="outSine" fixed>
        {children}
      </Text>
    </Animator>
  );
};

export default Typewriter;
