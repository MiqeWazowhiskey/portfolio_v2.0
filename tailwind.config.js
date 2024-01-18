/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{jsx,html,js,tsx}"],
  theme: {
    extend: {
        fontFamily:{
            'ubuntu' : ['Ubuntu', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
