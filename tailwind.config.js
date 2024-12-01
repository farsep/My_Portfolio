/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'palette-1': '#B7094C',
        'palette-2': '#A01A58',
        'palette-3': '#892B64',
        'palette-4': '#723C70',
        'palette-5': '#5C4D7D',
        'palette-6': '#455E89',
        'palette-7': '#2E6F95',
        'palette-8': '#1780A1',
        'palette-9': '#0091AD',
      },
    },
  },
  plugins: [],
}