import React, { Suspense } from "react";
import Form from "./Form";
import Box from "@/components/Box";
import Typewriter from "@/components/ArwesComponents/Typewriter";
import BlinkingText from "@/components/BlinkingText";
import Messages from "./Messages";
import LoadingPage from "@/components/LoadingPage";

const Chat = () => {
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
        <Suspense fallback={<LoadingPage />}>
          <Messages />
        </Suspense>
      </div>
    </main>
  );
};

export default Chat;
