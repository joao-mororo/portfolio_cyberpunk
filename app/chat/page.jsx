import React from "react";
import Form from "./Form";
import Box from "@/components/Box";
import Typewriter from "@/components/ArwesComponents/Typewriter";
import BlinkingText from "@/components/BlinkingText";
import { headers } from "next/headers";

const Chat = async () => {
  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto") || "";
  const domain = headersList.get("x-forwarded-host") || "";

  const messages = await fetch(`${protocol}://${domain}/api/chat/get`, {
    next: { cache: "no-store" },
  })
    .then((res) => res.json())
    .then((res) => res.data);

  return (
    <main className="container flex flex-col items-center justify-center py-8 sm:py-[2%]">
      <Typewriter as="h1" className="text-3xl font-bold">
        Chat global
      </Typewriter>
      <BlinkingText>• チャット •</BlinkingText>
      <br />
      <Form />
      <hr className="my-8 w-1/2 border-[#ccc]" />
      <div className="flex w-full flex-col items-center gap-4 sm:w-2/3">
        <Box className="w-full p-6">
          <Typewriter as="h2" manager="decipher" className="text-2xl font-bold">
            João Mororó
          </Typewriter>
          <Typewriter
            as="p"
            className="mt-4 border-l-4 border-solid border-l-text_color pl-4"
          >
            Aqui você pode deixar uma messagem pública para interagir comigo e
            com todos que vierem até aqui!
          </Typewriter>
        </Box>
        {messages &&
          messages.map((data) => (
            <Box key={data._id} className="w-full p-6">
              <Typewriter
                as="h2"
                manager="decipher"
                className="text-2xl font-bold"
              >
                {data.name}
              </Typewriter>
              <Typewriter
                as="p"
                className="mt-4 border-4 border-solid border-l-text_color pl-4"
              >
                {data.message}
              </Typewriter>
            </Box>
          ))}
      </div>
    </main>
  );
};

export default Chat;
