"use client";

import { BleepsProvider } from "@arwes/react";
import React from "react";

const bleepsSettings = {
  // Shared global audio settings.
  master: {
    volume: 0.9,
  },
  bleeps: {
    // A transition bleep sound to play when the user enters the app.
    intro: {
      sources: [
        {
          src: "https://arwes.dev/assets/sounds/intro.mp3",
          type: "audio/mpeg",
        },
      ],
    },
    // An interactive bleep sound to play when user clicks.
    click: {
      sources: [
        {
          src: "https://arwes.dev/assets/sounds/click.mp3",
          type: "audio/mpeg",
        },
      ],
    },
  },
};

const SoundsProvider = ({ children }) => {
  return <BleepsProvider {...bleepsSettings}>{children}</BleepsProvider>;
};

export default SoundsProvider;
