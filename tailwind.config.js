/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('/public/img/AboutUsBackground.png')",
        aboutImg: "url('/public/img/AboutUsImg.png')",
        contact: "url('/public/img/ContactUsBackground.png')",
        contactImg: "url('/public/img/ContactUsImg.png')",
        core1: "url('/public/img/Core1.png')",
        core2: "url('/public/img/Core2.png')",
        core3: "url('/public/img/Core3.png')",
        footer: "url('/public/img/Footer.png')",
        footerlogo: "url('/public/img/FooterLogo.png')",
        mainlogo: "url('/public/img/MainLogo.png')",
        professional1: "url('/public/img/Professional1.png')",
        professional2: "url('/public/img/Professional2.png')",
        professional3: "url('/public/img/Professional3.png')",
        slider: "url('/public/img/SlideBackground.png')",
        sliderImg: "url('/public/img/SlideImg.png')",
        totopbutton: "url('/public/img/ToTopButton.png')",
      },
    },
  },
  plugins: [],
};
