"use client";

import React from "react";
import CyberpunkFont from "../CyberpunkFont";
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { toast } from "react-toastify";
import { TOASTFY_CONFIG } from "@/data/contants";

const Footer = () => {
  const copyDiscord = () => {
    navigator.clipboard.writeText("sleepingbtw");
    toast.info("Usuário copiado", TOASTFY_CONFIG);
  };

  return (
    <div className="bg-black">
      <footer className="container grid grid-cols-1 sm:grid-cols-2 py-12 sm:py-16">
        <div className="flex justify-center items-center gap-4">
          <span className="hidden sm:block">
            &copy; {new Date().getFullYear()}
          </span>
          <CyberpunkFont className="text-3xl font-bold">
            Joao Mororo
          </CyberpunkFont>
          <span className="hidden sm:block">all rights reserved</span>
        </div>
        <div className="flex justify-center items-center gap-4 mt-4 sm:mt-0">
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
        <div className="text-center mt-8 block sm:hidden">
          <span>{new Date().getFullYear()} &copy; all rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
