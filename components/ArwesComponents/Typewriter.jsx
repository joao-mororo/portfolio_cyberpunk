"use client";

import { Animator, Text } from "@arwes/react";
import { useEffect } from "react";

const Typewriter = ({
  children,
  as = "p",
  speed = 1,
  manager = "sequence",
  href,
  target,
}) => {
  useEffect(() => {
    const audio = document.getElementById("audio-type");
    audio.play();
  }, []);

  return (
    <Animator active duration={{ enter: speed }}>
      <audio id="audio-type" src="/sounds/type.mp3"></audio>
      <Text
        as={as}
        manager={manager}
        easing="outSine"
        fixed
        href={href}
        target={target}
      >
        {children}
      </Text>
    </Animator>
  );
};

export default Typewriter;
