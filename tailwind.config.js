/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#092E44',
        brand: '#3293D9',
        brandSoft: '#E8F4FD',
        surface: '#F8FAFC',
        muted: '#64748B',
        line: '#E5E7EB',
        lineStrong: '#CBD5E1',
        success: '#047857',
        warning: '#B45309',
        danger: '#DC2626',
        violet: '#6D5DF6',
        mint: '#12B981'
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '6px',
        md: '6px',
        lg: '6px'
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.05), 0 14px 38px rgba(15, 23, 42, 0.08)',
        lift: '0 18px 55px rgba(15, 23, 42, 0.14)',
        glow: '0 0 0 1px rgba(50, 147, 217, 0.12), 0 18px 45px rgba(50, 147, 217, 0.20)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' }
        },
        'bar-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        pulseRing: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(50, 147, 217, 0.28)' },
          '50%': { boxShadow: '0 0 0 7px rgba(50, 147, 217, 0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 220ms ease-out both',
        shimmer: 'shimmer 1.7s ease-in-out infinite',
        'bar-grow': 'bar-grow 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        pulseRing: 'pulseRing 1.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
