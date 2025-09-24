import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // defina sua cor “scarcity” aqui
        scarcity: {
          DEFAULT: "#F97316", // exemplo (laranja). Troque pelo seu hex desejado.
        },
      },
    },
  },
  plugins: [],
};
export default config;
