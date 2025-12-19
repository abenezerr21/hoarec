/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Environmental NGO Color Palette
        nature: {
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#10b981', // Primary green
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          blue: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9', // Sky blue
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          yellow: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#fbbf24', // Sunshine yellow
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          earth: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
          },
        },
        // Legacy brand colors (keeping for compatibility)
        brand: {
          DEFAULT: "#10b981",
          soft: "#f0fdf4",
          dark: "#047857",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-nature': 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 50%, #fef9c3 100%)',
        'gradient-green-blue': 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
        'gradient-green-yellow': 'linear-gradient(135deg, #10b981 0%, #fbbf24 100%)',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        scroll: 'scroll 25s linear infinite',
      },
    },
  },
  plugins: [],
};


