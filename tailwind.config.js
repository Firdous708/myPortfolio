/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#0a192f",
        darkNavy: "#020c1b",
        navy: "#0a192f",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        navyShadow: "rgba(2,12,27,0.7)",
        darkSlate: "#495670",
        mewslate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        newwhite: "#e6f1ff",
        newgreen: "#64ffda",
        greenTint: "rgba(100,255,218,0.1)",
        newpink: "#f57dff",
        newblue: "#57cbff",
      },
    },
  },
  plugins: [],
};
