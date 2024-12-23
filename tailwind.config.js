/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      'yt-music': 'linear-gradient(180deg, #000000, #121212)',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

