/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        1440: "1440px",
      },
      minWidth: {
        "100vw": "100vw",
      },
      minHeight: {
        "100vh": "100vh",
      },
      colors: {
        "dark-blue-elements": "hsl(209, 23%, 22%)",
        "dark-blue-bg": "hsl(207, 26%, 17%)",
        "very-dark-blue-text": "hsl(200, 15%, 8%)",
        "dark-gray-input": "hsl(0, 0%, 52%)",
        "very-light-gray-bg": "hsl(0, 0%, 98%)",
        "white-text-elements": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        "homepage-items": "14px",
        "detail-page": "16px",
      },
    },
  },
  plugins: [],
};
