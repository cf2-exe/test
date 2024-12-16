
/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from "daisyui";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'menu-slide': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'menu-slide': 'menu-slide 0.5s ease-out',
      },
      rotate: {
        '60': '60deg',
      },
      backgroundImage: {
        'custom-linear': 'linear-gradient(49deg, #2d4de0 0, #9f71f0 30%, #fc6277 58%, #d98a63 95%)',
      },
      transitionProperty: {
        padding: 'padding',
      },
      transitionDuration: {
        '200': '200ms',
      },
      transitionTimingFunction: {
        ease: 'ease',
      },
      colors: {
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    daisyui,
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-2-black": {
          "-webkit-text-stroke": "4px #8f8f8fee",
        },
        ".text-stroke-1-red": {
          "-webkit-text-stroke": "1px red",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
