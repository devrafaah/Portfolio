/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ssm': '400px',
        'mmd': '600px'
      },
    },
    
  },
  plugins: [],
}

