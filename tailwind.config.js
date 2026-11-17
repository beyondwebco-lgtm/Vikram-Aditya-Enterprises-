/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#2563eb",
            600: "#1d4ed8",
            700: "#1e40af",
            800: "#1e3a8a",
            900: "#0f172a",
            dark: "#0b1528",
          },
          yellow: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",
            600: "#d97706",
            700: "#b45309",
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(29, 78, 216, 0.1), 0 8px 10px -6px rgba(29, 78, 216, 0.1)',
        'yellow-glow': '0 10px 25px -5px rgba(245, 158, 11, 0.3)',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
        'float-slow': 'float 3.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
