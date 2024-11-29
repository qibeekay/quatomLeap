/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FA9938",
        dark: "#001F3D",
      },
      backgroundImage: {
        Form: "url(/src/assets/img2.jpg)",
      },
    },
    screens: {
      xs: "350px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xll: "1669px",
    },
    fontFamily: {
      poppins: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
