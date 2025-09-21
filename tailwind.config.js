/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        '2xl': '1.25rem',
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
