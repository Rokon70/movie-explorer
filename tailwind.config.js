/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0F1A',       // near-black cinema background
        surface: '#161927',    // card / raised surface
        surface2: '#1E2233',   // hover / secondary surface
        marquee: '#E8B54D',    // warm marquee gold (primary accent)
        velvet: '#C1443C',     // velvet curtain red (secondary accent)
        cream: '#F5F3EE',      // warm off-white text
        muted: '#9CA0B5',      // muted text
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
