/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/boxicons/**/*.svg",
  ],
  theme: {
    extend: {},
    fontFamily: {
      architect: ['"Architects Daughter"', "sans-serif", "system-ui"],
      sophia: ["Sophia", "system-ui"],
      pangolin: ["Pangolin", "system-ui"],
      itim: ["Itim", "system-ui"],
    },
  },
  plugins: [],
};
