/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Pain Points (Urgency/Warning)
                pain: {
                    DEFAULT: '#dc2626', // rose-600
                    light: '#f97316', // orange-600
                },
                // Solution (Calm/Trust)
                solution: {
                    DEFAULT: '#7c3aed', // violet-600
                    light: '#8b5cf6', // violet-500
                },
                // Outcome (Success)
                success: {
                    DEFAULT: '#10b981', // emerald-500
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'slide-in': 'slideIn 0.5s ease-out',
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
