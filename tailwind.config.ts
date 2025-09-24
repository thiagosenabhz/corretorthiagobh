// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#173F7A",   // azul profundo
        accent:  "#276EF1",   // azul vivo
        muted:   "#7686A3",
        scarcity:"#EE542C",   // laranja/vermelho das tarjas
      },
      fontFamily: {
        serif: ["ui-serif","Georgia","Cambria","Times New Roman","Times","serif"],
        sans:  ["ui-sans-serif","system-ui","Segoe UI","Roboto","Helvetica Neue","Arial","Noto Sans","sans-serif"],
      },
      boxShadow: {
        card: "0 10px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
