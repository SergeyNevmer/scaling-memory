module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        bgFirstSection: "url('./img/firstSection.png')",
        bgThirdSection: "url('./img/bgThirdSection.png')",
        bgFourthSection: "url('./img/bgFourthSection.png')",
        bgFifthSection: "url('./img/bgFifthSection.png')",
        bgSeventhSection: "url('./img/bgSeventhSection.png')",
        card01: "url(./img/bgCard01.png)",
        card02: "url(./img/bgCard02.png)",
        card03: "url(./img/bgCard03.png)",
        card04: "url(./img/bgCard04.png)",
      },
    },
  },
  plugins: [],
};
