/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.astro"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      leading: {
        huge: "3.75rem", // Custom width value (60px)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
