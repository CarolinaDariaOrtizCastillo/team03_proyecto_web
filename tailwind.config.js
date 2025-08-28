/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.html", // todas tus vistas HTML de Flask
    "./static/js/**/*.js"    // opcional, si usas JS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
