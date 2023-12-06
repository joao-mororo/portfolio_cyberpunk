"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const SoundsProvider = () => {
  const pathname = usePathname();

  // add sound-click to all buttons, links and sumaries
  useEffect(() => {
    const click = document.getElementById("sound-click");
    const buttons = document.querySelectorAll("button");
    const links = document.querySelectorAll("a");
    const summaries = document.querySelectorAll("summary");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        click.play();
      });
    }
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", () => {
        click.play();
      });
    }
    for (var i = 0; i < summaries.length; i++) {
      summaries[i].addEventListener("click", () => {
        click.play();
      });
    }
  }, [pathname]);

  // add sound-intro on load page (not working)
  useEffect(() => {
    const intro = document.getElementById("sound-intro");
    intro.play();
    // document.getElementsByTagName("body")[0].addEventListener("load", () => {
    //   intro.play();
    // });
  }, []);

  return (
    <>
      <audio id="sound-intro" src="/sounds/intro.mp3"></audio>
      <audio id="sound-click" src="/sounds/click.mp3"></audio>
    </>
  );
};

export default SoundsProvider;
