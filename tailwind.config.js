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
        nyati: {
          // Primary brand colors (exact matches from the brand assets)
          navy: '#293f63',     // C100 M80 Y25 K40 - Navy blue from logo
          orange: '#F79752',   // C0 M50 Y80 K0 - Orange from logo
          green: '#21A649',    // C80 M7 Y80 K12 - Green from logo
          
          // Extended color palette
          'dark-blue': '#293f63',  // Existing dark blue
          'light-orange': '#feb47b', // Existing light orange
          cream: '#fff7ed',     // Existing cream
          grey: '#64748b',      // Existing grey
          'light-grey': '#f8fafc', // Existing light grey
          'dark-grey': '#334155', // Existing dark grey
        },
        
        // Extended palette versions of the main brand colors for design flexibility
        orange: {
          50: '#FFF8F0',
          100: '#FEECDA',
          200: '#FDDAB6',
          300: '#FCC892',
          400: '#FAB66D',
          500: '#F7941D', // Brand orange
          600: '#E17A0A',
          700: '#BB6308',
          800: '#944D06',
          900: '#6E3904',
        },
        navy: {
          50: '#E7ECF4',
          100: '#C2CEE4',
          200: '#99ADD2',
          300: '#708DBF',
          400: '#4E71AF',
          500: '#2E559F',
          600: '#1F447E',
          700: '#13335E',
          800: '#0A2E5E', // Brand navy
          900: '#041E3F',
        },
        green: {
          50: '#E9F7EE',
          100: '#C6EAD4',
          200: '#9FDCB7',
          300: '#78CD9A',
          400: '#51BF7D',
          500: '#2BAC60',
          600: '#21A649', // Brand green
          700: '#1B8A3A',
          800: '#156F2E',
          900: '#0F5422',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-merriweather)', 'serif'], 
        futura: ['Futura', 'var(--font-inter)', 'sans-serif'], // Add Futura for branding elements
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'nyati-pattern': "url('/images/nyati-pattern.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-in-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'rotate-in': 'rotateIn 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateIn: {
          '0%': { transform: 'rotate(-5deg) scale(0.9)', opacity: '0' },
          '100%': { transform: 'rotate(0) scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      zIndex: {
        '-10': '-10',
        '60': '60',
        '70': '70',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}