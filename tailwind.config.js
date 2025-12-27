   /** @type {import('tailwindcss').Config} */
   module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#00A884',
                dark: '#1C1C1C',
                lightGray: '#F5F5F5',
            },
        },
    },
    plugins: [],
}