/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightColor: '#ffffff',
        darkColor: '#1a202c',
        lightColorHover: '#e8eaed',
        darkColorHover: '#374151',
        lightColorHF: '#eff6ff',
        darkColorHF: '#202837',
      },
    },
  },
  plugins: [],
}

