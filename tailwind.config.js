/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./assets/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00C58E', // Nuxt green for primary color
        'primary-color': '#FF5722',
        'dark-gray': '#333333',
        'medium-gray': '#555555',
        'light-gray': '#f5f5f5',
      },
      // In Tailwind v4, redefine the entire gray scale if extending it
      textColor: {
        gray: {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
          '950': '#030712',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      keyframes: {
        bounce: {
          '0%, 20%, 50%, 80%, 100%': { 
            transform: 'translateY(0) translateX(-50%)' 
          },
          '40%': {
            transform: 'translateY(-20px) translateX(-50%)'
          },
          '60%': {
            transform: 'translateY(-10px) translateX(-50%)'
          }
        }
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}