import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "10%",
      },
      cursor: {
        default: "url(/images/Cuberpunk-Cursor/arrow.cur), default",
        pointer: "url(/images/Cuberpunk-Cursor/link.cur), pointer",
        wait: "url(/images/Cuberpunk-Cursor/wait.ani), wait",
        text: "url(/images/Cuberpunk-Cursor/beam.cur), text",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#defe47",
      secondary: "#d1f7ff",
      background: "#021114",
      text_color: "#05d9e8",
      accent: "#ff0000",
      accent_transparent: "#ff000010",
      ...colors,
    },
  },
};
