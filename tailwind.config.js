/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app.{js,jsx,ts,tsx}", "./src/screens/Splash/index.js", "./src/screens/Home/index.js", "./src/screens/Riwayat/index.js","./src/screens/Login/index.js", "./src/routes/index.js"
  ],
  theme: {
    extend: {
      colors: {
        customBlue : '#10ac84'
      }
    },
  },
  plugins: [],
}