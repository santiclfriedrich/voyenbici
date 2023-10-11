/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0054BE',
      },
      fontSize: {
        'custom-title': '40px',
      },
      spacing: {
        'custom-width': '60%',
        'custom-margin-bottom': '48px',
      },
      fontWeight: {
        'bold': 'bold',
      },
    },
    borderWidth:{
      '6': '6px',
    }
  },
  plugins: [],
}
