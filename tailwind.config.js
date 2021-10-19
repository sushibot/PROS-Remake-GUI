module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    extend: {
      textDecoration: ["focus-visible"],
    },
    color: {
      secondary: "#0ac5b3",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    width: {
      "mobile-event-image": "325px",
    },
    maxWidth: {
      "24rem": "24rem",
      "230px": "230px",
    },
    backgroundImage: {
      "hero-image": "url('/public/img/hula.jpg')",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
