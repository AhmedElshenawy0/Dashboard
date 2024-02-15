/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        mainColor: "#202020",
        primaryColor: "#181818",
        secondaryColor: "#212121",
        mainButton: "#554db7",
        button: "#9089dc",
      },
    },
  },
  plugins: [],
};
