import React from "react";
import Link from "next/link";
import CyberpunkFont from "../CyberpunkFont";

const Header = () => {
  return (
    <div className="container flex py-4">
      <div className="w-full py-4 sm:w-1/3 sm:py-0">
        <CyberpunkFont className="text-3xl font-bold text-primary">
          Joao Mororo
        </CyberpunkFont>
      </div>
      <div className="hidden w-full justify-end gap-8 sm:flex">
        <Link href={"/"}>Home</Link>
        <Link href={"/github"}>Github</Link>
        <Link href={"/chat"}>Chat</Link>
      </div>
    </div>
  );
};

export default Header;
