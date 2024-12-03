/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: "#971c1c",
        primary2:"#d62727",
        primary3:"#ee8e1d",
        primary4:"#ffd43e",
        primary5:"#113441",
      }
     
    },
    fontFamily: {
      Abrial:['Abril Fatface','sans']
    }
  },
  plugins: [],
};
