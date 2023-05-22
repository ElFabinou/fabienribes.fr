/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
    theme: {
        extend: {
            // cacher la barre de défilement
            scrollbarHide: {
                '-ms-overflow-style': 'none',
                'scrollbar-width': 'none',
            },
            // pour Firefox
            scrollbar: {
                ' &::-webkit-scrollbar': {
                display: 'none',
                },
            },
            fontFamily: {
                'manrope': ['Manrope', 'sans-serif']
            },
            animation: {
                'tracking': 'tracking 2s cubic-bezier(0.65, 0, 0.35, 1)',
                'mouse': 'mouse 2s infinite',
            },
            keyframes: {
                tracking: {
                    '0%': { letterSpacing: '0.4em' },
                    '100%': { letterSpacing: '0.1em' },
                },
                mouse: {
                    '0%': { opacity: '1', top: '5px' },
                    '100%': { opacity: '0', top: '50px' },
                },
            }
        },
    },
    plugins: [],
}

