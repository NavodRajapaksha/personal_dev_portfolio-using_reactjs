/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#7bd0ff",
                background: "#0b1326",
                surface: "#0b1326",
                secondary: "#4ae176",
                "surface-container": "#131b2e",
                "on-surface-variant": "#c6c6cd",
            },
            fontFamily: {
                headline: ["Space Grotesk", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}