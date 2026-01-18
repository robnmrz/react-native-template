/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#1f1e17",
                secondary: "#151312",
                light: {
                    bg: "hsl(0, 0%, 90%)",
                    muted: "hsl(0, 0%, 95%)",
                    highlight: "hsl(0, 0%, 100%)",
                    text: "hsl(0, 0%, 5%)",
                    "text-muted": "hsl(0, 0%, 30%)",
                    border: "hsl(0, 0%, 75%)",
                },
                dark: {
                    bg: "hsl(0, 0%, 0%)",
                    muted: "hsl(0, 0%, 6%)",
                    highlight: "hsl(0, 0%, 15%)",
                    text: "hsl(0, 0%, 95%)",
                    "text-muted": "hsl(0, 0%, 70%)",
                    border: "hsl(0, 0%, 15%)",
                },
            },
        },
    },
    plugins: [],
};
