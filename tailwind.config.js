/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xsm':'360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
