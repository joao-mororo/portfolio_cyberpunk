import { Share_Tech_Mono } from "next/font/google";
import React from "react";

const share_tech_mono = Share_Tech_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Input = ({
  children,
  type,
  id,
  value,
  onChange,
  placeholder,
  required,
  isTextarea,
  cols,
  rows,
  name,
}) => {
  const As = isTextarea ? "textarea" : "input";

  return (
    <As
      className={`border-none bg-black p-4 text-lg text-accent caret-primary outline-none ${share_tech_mono.className}`}
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      cols={cols}
      rows={rows}
      name={name}
    >
      {children}
    </As>
  );
};

export default Input;
