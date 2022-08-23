/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/img/MainLogo.png')",
      },
    },
  },
  plugins: [],
};
