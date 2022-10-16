/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        variants: {
            textColor: ['responsive', 'hover', 'focus', 'focus-within']
        },
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 24,
            '2xl': 32
        },

        colors: {
            transparent: 'transparent',

            black: '#000',
            white: '#FFF',

            gray: {
                900: '#121214',
                800: '#202024',
                400: '#7C7C8A',
                200: '#C4C4C4',
                100: '#E1E1E6'
            },

            red: {
                900: '#F33535',
                500: '#EB4E4E'
            }
        },
        extend: {
            fontFamily: {
                sans: 'Inter, sans-serif'
            }
        }
    },
    plugins: []
}
