import React from "react";
import { Share_Tech_Mono } from "next/font/google";
import { SiSpinrilla } from "react-icons/si";

const share_tech_mono = Share_Tech_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const LoadingPage = () => {
  return (
    <section
      className={`flex h-[90vh] w-full items-center justify-center ${share_tech_mono.className}`}
    >
      <h1 className="flex gap-4 text-4xl font-bold">
        <SiSpinrilla className="animate-spin" />
        loading...
      </h1>
    </section>
  );
};

export default LoadingPage;
