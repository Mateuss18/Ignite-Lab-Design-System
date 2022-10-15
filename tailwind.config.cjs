/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.tsx'
    ],
    theme: {
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 24,
            '2xl': 32,
        },

        colors: {
            'gray-900': '#121214',
            'gray-800': '#202024',
            'gray-700': '#7C7C8A',
            'gray-200': '#C4C4C4',
            'gray-100': '#E1E1E6',

            'red-900': '#F33535',
            'red-500': '#F56767',
        },
        extend: {
            fontFamily: {
                sans: 'Inter, sans-serif'
            },
        },
    },
    plugins: []
}
