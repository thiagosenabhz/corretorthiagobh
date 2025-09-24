import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#173F7A" },   // deep blue
        accent: { DEFAULT: "#276EF1" },    // bright blue
        muted:  { DEFAULT: "#7686A3" },
        scarcity: { DEFAULT: "#EE542C" },  // orange/red
      },
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 20px rgba(0,0,0,0.06)",
      }
    },
  },
  plugins: [],
};
export default config;
