/** @type {import('tailwindcss').Config} */
export default {
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
        sm: "0.875rem",
        base: "1rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.625rem",
        "2xl": "2.125rem",
        "3xl": "2.625rem",
        "4xl": " 3.625rem",
        "6xl": "4.5rem",
        "5xl": "5rem",
        "6xl": "6rem",
      },
    },
  },
  plugins: [],
};
