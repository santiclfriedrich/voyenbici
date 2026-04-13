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
        'bg-involvement-mobile': "url('/involve/cpi-img-chica-1.svg')",
        'bg-involvement-desktop': "url('/involve/cpi-1-des.svg')",
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
      gridTemplateColumns: {
        'articles': 'repeat(auto-fit, minmax(350px, 1fr))',
      },
    },
    borderWidth:{
      '6': '6px',
    },
  },
  plugins: [],
}
