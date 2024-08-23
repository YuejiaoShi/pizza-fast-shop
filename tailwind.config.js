/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

// Tailwind’s default configurations: https://github.com/tailwindlabs/tailwindcss/blob/main/stubs/config.full.js
