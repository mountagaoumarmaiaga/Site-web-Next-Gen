/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A3A5A', // Navy blue from logo
          dark: '#0F2A4A',
          light: '#2A4A6A'
        },
        secondary: {
          DEFAULT: '#C6A15C', // Gold from logo
          dark: '#B6914C',
          light: '#D6B16C'
        },
        accent: {
          DEFAULT: '#1E5F4E', // Green from logo
          dark: '#0E4F3E',
          light: '#2E6F5E'
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1E1E1E',
          light: '#2A2A2A',
          medium: '#333333',
        }
      },
      backgroundImage: {
        'circuit-pattern': "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        'tech-gradient': 'linear-gradient(to right, rgba(26, 58, 90, 0.9), rgba(18, 18, 18, 0.9))',
      }
    },
  },
  plugins: [],
};