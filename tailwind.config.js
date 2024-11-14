/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens: {

      "3xl": { max: "1511px" },
      // => @media (max-width: 1440px) { ... }

      "2xl": { max: "1440px" },
      // => @media (max-width: 1440px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "426px" },
      // => @media (max-width: 425px) { ... }
    },
    extend: {
      backgroundColor:{
        darkGreen:"#457B00"
      },
      colors:{
        darkYellow:"#FFED30",
        darkGreen:"#457B00"
      },
      boxShadow: {
        headershadow:"0px 4px 20px 0px rgba(0, 0, 0, 0.2)",
        brownshadow:"0px 4px 0px 0px rgba(169, 56, 0, 1)"
      },
      dropShadow:{
        browndropshadow:"0px 4px 10px 0px rgba(169, 56, 0, 1)"
      },
      filter: {
        'custom-filter': 'brightness(0) saturate(100%) invert(20%) sepia(87%) saturate(2495%) hue-rotate(20deg) brightness(96%) contrast(104%)',
        'custom-hover-filter': 'brightness(0) saturate(100%) invert(33%) sepia(83%) saturate(844%) hue-rotate(50deg) brightness(99%) contrast(102%)',
      },
    },
  },
  plugins: [],
}

