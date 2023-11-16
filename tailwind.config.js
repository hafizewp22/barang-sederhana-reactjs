module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      width: {
        'screen-90': '90vw',
        'screen-60': '60vw',
        'w-120': '36rem',
        'w-112': '32rem',
        'w-136': '44rem',
        'w-152': '52rem'
      },
      height: {
        'h-10vh': '10vh',
        'h-20vh': '20vh',
        'h-30vh': '30vh',
        'h-40vh': '40vh',
        'h-50vh': '50vh',
        'h-60vh': '60vh',
      },
      backgroundColor: {
        'ff8d52': '#FF8D52',
        'CC4D28': '#CC4D28',
        'FFECDA': '#FFECDA',
      },
      colors: {
        'dark-orange': '#CC4D28',
        'background-orange': '#FF8D52',
        'text-orange': '#F95C3D',
        'text-slate': '#595959'
      },
      typography: ({ theme }) => ({
        orange: {
          css: {
            '--tw-prose-body': theme('colors.text-orange'),
            '--tw-prose-headings': theme('colors.dark-orange'),
          }
        },
        slate: {
          css: {
            '--tw-prose-body': theme('colors.text-slate'),
            '--tw-prose-headings': theme('colors.text-slate'),
          }
        },
        black: {
          css: {
            '--tw-prose-body': theme('colors.text-black'),
            '--tw-prose-headings': theme('colors.text-black'),
          }
        },
      })
    },
    screens: {
      'lm': '350px',
      // => @media (min-width: 350px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1300px',
      // => @media (min-width: 1300px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
