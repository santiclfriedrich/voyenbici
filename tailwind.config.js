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
        'articles': 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
      },
      colors: {
        'custom-blue': '#0054BE',
        'sign-yellow': '#FFD400',
        'sign-yellow-dark': '#F0B800',
        'sign-red': '#C1272D',
      },
      keyframes: {
        // Balanceo del cartel, como una señal colgada al viento.
        'sign-sway': {
          '0%, 100%': { transform: 'translateY(0) rotate(-1.2deg)' },
          '50%': { transform: 'translateY(-4px) rotate(1.2deg)' },
        },
      },
      animation: {
        'sign-sway': 'sign-sway 3.2s ease-in-out infinite',
      },
    },
    borderWidth:{
      '6': '6px',
    },
  },
  plugins: [],
}
