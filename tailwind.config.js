module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(109, 12, 29)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
