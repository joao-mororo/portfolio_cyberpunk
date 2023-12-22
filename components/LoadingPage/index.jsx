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
      className={`w-full h-[90vh] flex justify-center items-center ${share_tech_mono.className}`}
    >
      <h1 className="text-4xl font-bold flex gap-4">
        <SiSpinrilla className="animate-spin" />
        loading...
      </h1>
    </section>
  );
};

export default LoadingPage;
