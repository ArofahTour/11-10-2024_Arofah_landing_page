/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'whatsapp': '#25D366',

          'white-100': '#EAFAF9',
          'white-300': '#97E8E3',

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
          'neutral-900': '#262626',
       },
    },
    fontFamily: {
      'gilda': ['GildaDisplay', 'serif'],
      'urbanist': ['Urbanist', 'sans-serif'],
    },
    backgroundImage: {
      'gradient-linear': 'linear-gradient(to bottom, #595959 0%, #EAFAF9 100%)',
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  plugins: [],
  }
}