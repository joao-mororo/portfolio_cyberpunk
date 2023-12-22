import React from "react";
import Link from "next/link";
import CyberpunkFont from "../CyberpunkFont";

const Header = () => {
  return (
    <div className="container flex py-4">
      <div className="w-full py-4 sm:py-0 sm:w-1/3">
        <CyberpunkFont className="text-primary text-3xl font-bold">
          Joao Mororo
        </CyberpunkFont>
      </div>
      <div className="hidden sm:flex w-full justify-end gap-8">
        <Link href={"/"}>Home</Link>
        <Link href={"/github"}>Github</Link>
        <Link href={"/chat"}>Chat</Link>
      </div>
    </div>
  );
};

export default Header;
