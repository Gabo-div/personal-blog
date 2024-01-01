/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        bunker: {
          50: "#f5f7f8",
          100: "#dee3e9",
          200: "#bcc7d3",
          300: "#93a2b5",
          400: "#6d7c94",
          500: "#536179",
          600: "#404c61",
          700: "#363f4f",
          800: "#2e3541",
          900: "#2a2d37",
          950: "#0e1015",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
