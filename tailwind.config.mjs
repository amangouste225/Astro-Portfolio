/** @type {import('tailwindcss').Config} */

// import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: "InterVariable, sans-serif",
        ati: "AtiplaND, sans-serif",
      },
    },
  },
  plugins: [],
};
