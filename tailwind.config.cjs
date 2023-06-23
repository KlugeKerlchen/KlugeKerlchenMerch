/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#FFFFFF",
        white: "#DFF1FF",
        black: "#000000",
      },
      fontFamily: {
        lora: "Lora", //TODO add backup fonts
      },
    },
  },
  plugins: [],
};
