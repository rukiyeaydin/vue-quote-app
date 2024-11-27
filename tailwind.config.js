/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'all-sides': '0 8px 20px rgba(0, 0, 0, 0.1), 0 -8px 20px rgba(0, 0, 0, 0.05), 8px 0 20px rgba(0, 0, 0, 0.05), -8px 0 20px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

