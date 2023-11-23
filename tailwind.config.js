module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          50: "#eaecf0",
          100: "#cfd4dc",
          300: "#98a1b2",
          500: "#667085",
          "100_01": "#d0d5dd",
        },
        red: { A200: "#fd4561", A200_a2: "#fd4561a2" },
        gray: {
          50: "#f9fafb",
          100: "#f2f4f7",
          900: "#101828",
          "700_28": "#60617028",
          "900_0c": "#1018280c",
        },
        deep_purple: {
          50: "#e2d7f7",
          100: "#cebaeb",
          300: "#9f74c6",
          A200: "#9747ff",
        },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs: "0px 1px  2px 0px #1018280c",
        bs1: "0px 4px  8px 0px #60617028",
      },
      fontFamily: {
        retripsdemo: "Retrips DEMO",
        satoshi: "Satoshi",
        inter: "Inter",
      },
      backgroundImage: { gradient: "linear-gradient(180deg ,#f9fafb,#e2d7f7)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
