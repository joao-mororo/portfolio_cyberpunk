import React from "react";
import LocalFont from "next/font/local";

const cyberpunk = LocalFont({
  src: "../../fonts/Cyberpunk-Regular.ttf",
  display: "swap",
});

const Logo = ({ as = "h1", children, className }) => {
  const As = as;

  return <As className={`${className} ${cyberpunk.className}`}>{children}</As>;
};

export default Logo;
