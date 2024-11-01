/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./styles.css"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f5f5f5",
          800: "#2c3e50",
        },
        blue: {
          400: "#3498db",
          600: "#2980b9",
        },
        white: "#ecf0f1",
        black: "#333333",
      },
      fontFamily: {
        roboto: ['"Roboto"', 'Arial', 'sans-serif'],
        lobster: ['"Lobster"', 'cursive'],
      },
      fontSize: {
        base: '18px',
        lg: '1.125rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '3xl': '1.875rem',
      },
      borderRadius: {
        DEFAULT: '5px',
      },
      spacing: {
        5: '1.25rem',
        10: '2.5rem',
      },
      transitionDuration: {
        300: '300ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionProperty: {
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        transform: 'transform',
      },
      scale: {
        105: '1.05',
      },
      keyframes: {
        subtleZoom: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        subtleFadeIn: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        subtleZoom: 'subtleZoom 5s ease-in-out infinite',
        subtleFadeIn: 'subtleFadeIn 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};