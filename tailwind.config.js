/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'brand-100': '#EAFAF9',
          'brand-300': '#97E8E3',
          'brand-400': '#6DDED8',
          'brand-500': '#44D5CD',
          'brand-600': '#177694',

          'orange-400': '#F3B276',     
          'orange-500': '#EE8F39',     
          'orange-600': '#ED8528',     
          'orange-700': '#D77012', 
          
          'neutral-400': '#A6A6A6',
          'neutral-500': '#8C8C8C',
          'neutral-600': '#737373',
          'neutral-700': '#595959',
       },
    },
  plugins: [],
  }
}