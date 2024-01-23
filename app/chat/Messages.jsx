import React from "react";
import { headers } from "next/headers";
import Box from "@/components/Box";
import Typewriter from "@/components/ArwesComponents/Typewriter";

const Messages = async () => {
  const headersList = headers();
  const protocol = headersList.get("x-forwarded-proto") || "";
  const domain = headersList.get("x-forwarded-host") || "";

  const messages = await fetch(`${protocol}://${domain}/api/chat/get`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((res) => res.data);

  return (
    <>
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
