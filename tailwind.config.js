/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7a4637",
        secondary: "#421917",
        brandDark: "#240802",
        dark: "#1c1c1c",
        light: "#f0f0f0",
      },
      fontFamily:{
        "poppins": ["Poppins", "sans-serif"],
        "pasifika": ["Poppins", "sans-serif"]
      },
      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
         
        },
      }
    },
  },
  plugins: [],
};
