module.exports = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './sections/**/*.{ts,tsx,mdx}',
    './data/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        charcoal: '#020617',
        slate: '#1E293B',
        skyBlue: '#38BDF8',
        primary: '#38BDF8',
        accent: '#60A5FA'
      },
      boxShadow: {
        'glow': '0 0 20px rgba(56, 189, 248, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
