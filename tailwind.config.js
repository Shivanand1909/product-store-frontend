/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A884",
        dark: "#1C1C1C",
        lightGray: "#F5F5F5",
      },
      // FS-06: Fluid font sizes that stay readable on mobile
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
        xs:   ["12px", { lineHeight: "16px" }],
        sm:   ["13px", { lineHeight: "20px" }],
        base: ["14px", { lineHeight: "22px" }],
      },
      // FS-06: Consistent screen breakpoints
      screens: {
        xs: "375px",   // small phones
        sm: "640px",   // tablets
        md: "768px",   // small desktops
        lg: "1024px",  // desktops
        xl: "1280px",  // large desktops
      },
      // FS-06: Max width so content never stretches too wide
      maxWidth: {
        app: "1280px",
      },
    },
  },
  plugins: [],
};