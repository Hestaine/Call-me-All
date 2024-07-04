/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      vsm: "300px",
      sm: "599px",
      vmd: "768px",
      md: "820px",
      lg: "1024px",
    },
    extend: {
      colors: {
        link: "rgb(54, 54, 109)",
        github: "rgb(27, 27, 27)",
        discord: "rgb(37, 37, 82)",
        textWhite: "rgb(5, 0, 31)",
        linkdin: "rgb(39, 39, 182)",
        feedback: "rgb(78, 78, 129)",
        blue: "rgba(14, 8, 43, 0.7)",
        mainBlack: "rgb(73, 73, 83)",
        aboutSection: "rgb(0, 5, 37)",
        footerBlack: "rgb(80, 80, 88)",
        headerBlack: "rgba(82, 82, 94)",
        bodyBlack: "rgba(0, 0, 0, 0.7)",
        whiteSmoke: "rgb(245, 245, 245)",
        headerWhite: "rgba(247, 247, 247)",

        callmeTexColor: "rgb(236, 236, 236)",
        callmePageNumInput: "rgb(0, 0, 0, 0.05)",
        callmePageNumSubmit: "rgb(0, 0, 0, 0.1)",
        callmeSection: "rgba(245, 245, 245, 0.5)",
        callmeNavigate: "rgba(245, 245, 245)",
      },
      dropShadow: {
        generalBlack: "1px 2px 2px rgb(0, 0, 0)",
        generalWhite: "1px 2px 2px rgb(255, 255, 255)",
        otherColor: "0px 10px 17px rgb(15, 21, 27)",
      },
      boxShadow: {
        callmeall: "1px 4px 3px rgb(0, 0, 0)",
        header: "3px 10px 12px rgba(0, 0, 0, 0.7)",
        footer: "3px -10px 12px rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        spaceGroetesk: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        callmeNavigate: "0 10px 10px 0",
      },
    },
  },
  plugins: [],
};
