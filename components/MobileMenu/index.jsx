"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlinkingText from "../BlinkingText";
import CyberpunkFont from "../CyberpunkFont";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

const MobileMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState();

  const copyDiscord = () => {
    navigator.clipboard.writeText("sleepingbtw");
    alert("Usuário copiado");
  };

  return (
    <>
      {menuIsOpen ? (
        <div className="fixed z-20 h-screen w-screen bg-background">
          <button
            className="absolute right-8 top-8 text-4xl"
            onClick={() => setMenuIsOpen(false)}
          >
            <BiX />
          </button>
          <div className="flex h-1/4 flex-col items-center justify-center bg-black">
            <CyberpunkFont className="text-4xl">Joao Mororo</CyberpunkFont>
            <BlinkingText>• メニュー •</BlinkingText>
          </div>
          <nav className="flex h-2/4 flex-col items-center justify-center gap-4 text-2xl">
            <Link href={"/"} onClick={() => setMenuIsOpen(false)}>
              Home
            </Link>
            <Link href={"/github"} onClick={() => setMenuIsOpen(false)}>
              GitHub
            </Link>
            <Link href={"/chat"} onClick={() => setMenuIsOpen(false)}>
              Chat
            </Link>
          </nav>
          <div className="flex h-1/4 items-center justify-center gap-4">
            <a
              className="text-2xl hover:opacity-50"
              href="https://github.com/joao-mororo"
              target="_blank"
            >
              <BsGithub />
            </a>
            <a
              className="text-2xl hover:opacity-50"
              href="https://www.linkedin.com/in/joaovitormororo/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
            <a
              className="text-2xl hover:opacity-50"
              onClick={() => copyDiscord()}
              style={{ cursor: "pointer" }}
            >
              <BsDiscord />
            </a>
          </div>
        </div>
      ) : (
        <button
          className="absolute right-8 top-8 block text-4xl sm:hidden"
          onClick={() => setMenuIsOpen(true)}
        >
          <BiMenuAltRight />
        </button>
      )}
    </>
  );
};

export default MobileMenu;
