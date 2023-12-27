/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1436px",
        "3xl": "1600px",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Caveat", "ui-sans-serif"],
      },
      fontSize: {
        p: "17px",
        sm: "0.25rem",
        base: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "2.75rem",
        "4xl": "3.25rem",
        "5xl": "3.75rem",
        "6xl": "5.25rem",
        "7xl": "6rem",
        "8xl": "7rem",
      },
    },
  },
  plugins: [],
};
