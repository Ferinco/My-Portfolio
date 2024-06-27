/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '6rem',
      },
      center: true,
    },
    
    extend: {},
  },
  plugins: [],
}

