import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        back1: "#f5f5f5",
        back2: "#ffffff", // Changed to use hex code for clarity
        primary: "#f0542a",
        secondary: "#fc8162",
        success1: "#e7fff4",
        success2: "#0c7544",
        text1: "#000000",
        text2: "#343e52",
      },
      fontFamily: {
        main: ["PeydaWeb", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
