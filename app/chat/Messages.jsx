import React from "react";
import Box from "@/components/Box";
import Typewriter from "@/components/ArwesComponents/Typewriter";
import apiFetch from "@/functions/apiFetch";

const Messages = async () => {
  const messages = await apiFetch("api/chat/get", {
    next: { tags: ["get-messages"] },
  })
    .then((res) => res.json())
    .then((res) => res.data);

  return (
    <>
      <Box className="w-full p-6">
        <Typewriter as="h2" manager="decipher" className="text-2xl font-bold">
          João Mororó
        </Typewriter>
        <Typewriter
          as="p"
          className="mt-4 border-l-4 border-solid border-l-text_color pl-4"
        >
          Aqui você pode deixar uma messagem pública para interagir comigo e com
          todos que vierem até aqui!
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
              className="mt-4 border-l-4 border-solid border-l-text_color pl-4"
            >
              {data.message}
            </Typewriter>
          </Box>
        ))}
    </>
  );
};

export default Messages;
