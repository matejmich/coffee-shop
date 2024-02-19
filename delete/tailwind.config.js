// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg-color': '#3b2315', 
        'custom-bg-color-hover': '#29190f'
      },
    },
  },
  plugins: [],
};
