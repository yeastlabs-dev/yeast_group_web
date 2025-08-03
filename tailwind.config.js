// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        // ---- YEAST GROUP BAREVNÁ PALETA START ----
        primary: {
          50: '#F5F5F6', 100: '#EBEBF0', 200: '#C7C7CF', 300: '#A4A4AF', 400: '#80808F',
          500: '#5D5D6E', 600: '#39394E', DEFAULT: '#2B2B2E', 700: '#23232C',
          800: '#1C1C24', 900: '#14141C',
        },
        secondary: { // Hlavní fialová (Yeast Group & Ventures)
          50: '#F6F3FB', 100: '#EDE6F8', 200: '#D5C4EC', 300: '#BDA2E0', 400: '#A680D4',
          500: '#8E5FCA', 600: '#753DA2', DEFAULT: '#9A80D6', 700: '#5E4B94',
          800: '#473970', 900: '#30264B',
        },
        gray: { // Standardní šedá
          100: '#f7fafc', 200: '#edf2f7', 300: '#e2e8f0', 400: '#cbd5e0', 500: '#a0aec0',
          600: '#718096', 700: '#4a5568', 800: '#2d3748', 900: '#1a202c',
        },

        // --- Specifické barvy pro divize (akcenty) ---
        'yeast-operations-accent': '#4D6346', // Tmavě zelená
        'yeast-invest-accent': '#7B7B7B',     // Střední šedá
        'yeast-construction-accent': '#7B8C73', // Světle zelená
        'yeast-labs-accent': '#7B8C73',       // Světle zelená (stejná jako Construction)
        'yeast-services-accent': '#BA8C73',   // Střední hnědá
        'yeast-estates-accent': '#A18569',    // Střední hnědá

        // ---- YEAST GROUP BAREVNÁ PALETA END ----
      },
      lineHeight: {
        hero: '4.5rem',
      },
    },
  },
  plugins: [],
};