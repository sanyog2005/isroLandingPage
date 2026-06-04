/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35',
        secondary: '#004E89',
        dark: '#0A0E27',
        darkGray: '#1a1f35',
      },
      fontFamily: {
        // Your existing fonts
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        
        // The newly added fonts for the Hackathon design
        abel: ['Abel', 'sans-serif'],
        pilat: ['"Pilat Extended"', 'sans-serif'],
      },
      screens: {
        // Change '1200px' to whatever pixel value you want desktop to start at
        'lg': '1400px', 
      },
    },
  },
  plugins: [],
};