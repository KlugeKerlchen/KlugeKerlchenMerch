/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: {
          light: "#2ADFA8",
          dark: "#3bcea2",
        },
        second: "#004DB6",
        white: "#DFF1FF",
        white: {
          normal: "#DFF1FF",
          brighter: "#ebf7ff",
        },
        black: "#222833",
        black: {
          normal: "#222833",
          darker: "#11141a",
        },
      },
      fontFamily: {
        lora: "Lora", //TODO add backup fonts
      },
    },
  },
  plugins: [],
};
