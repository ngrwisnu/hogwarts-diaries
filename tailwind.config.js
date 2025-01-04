/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: "#e5e0ff",
        },
        castleton: {
          900: "#005a35",
        },
      },
    },
  },
  plugins: [],
};
