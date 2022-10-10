/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fff1a3",

          "secondary": "#fbccff",

          "accent": "#f78ab9",

          "neutral": "#221B27",

          "base-100": "#111827",

          "info": "#2A56EA",

          "success": "#1CCAA7",

          "warning": "#EFA14E",

          "error": "#E85B45",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
