/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['__Open_Sans_f3cbcc', 'sans-serif']
    },
    extend: {
      boxShadow: {
        card: '0px 2px 4px 0px rgba(0, 0, 0, 0.16), 0px 0px 2px 0px rgba(0, 0, 0, 0.08)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#4F46E5',
        green05: '#F4FDEC',
        green60: '#1B7929',
        red05: '#FFF3EB',
        red60: '#93182C',
        'gray-01': '#B0BEC5',
        'primary-surface': '#FFFAF4',
        primary20: '#F5F5F5',
        stroke: '#E8EDF1',
        neutral: {
          '08': '#616161',
          100: '#202020',
          60: '#9E9E9E',
          20: '#F5F8FB'
        }
      }
    }
  },
  plugins: []
})
