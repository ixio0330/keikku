/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#175428",
        background: "#FFF8EB",
        kakao: "#FAE11F",
      },
      maxWidth: {
        content: "400px",
      },
      padding: {
        content: "20px",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotation: "rotation 1s linear infinite",
      },
    },
  },
  plugins: [],
}
