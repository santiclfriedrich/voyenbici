/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-wave-blue-down': "url('/wave_down.svg')",
        'bg-wave-white-down': "url('/wave_white_down.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
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
