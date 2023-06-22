/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#FFFFFF",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};