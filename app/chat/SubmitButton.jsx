"use client";

import Button from "@/components/Button";
import React from "react";
import { useFormStatus } from "react-dom";
import { SiSpinrilla } from "react-icons/si";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type={"submit"}>
      {pending ? (
        <span>
          <SiSpinrilla className="animate-spin" /> Enviando...
        </span>
      ) : (
        <span>Enviar</span>
      )}
    </Button>
  );
};

export default SubmitButton;
