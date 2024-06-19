/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
        default: ["AtiplaND", "sans - serif"],
      },
      colors: {
        vulcan: {
          50: "#BACDD5",
          100: "#AEC2CE",
          200: "#94ACBE",
          300: "#7B95AF",
          400: "#617CA0",
          500: "#526587",
          600: "#424F6D",
          700: "#333A54",
          800: "#23273A",
          900: "#141521",
        },
      },
    },
  },
  plugins: [],
};
