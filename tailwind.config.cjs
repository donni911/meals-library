/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            transitionProperty: {
                left: "left",
                ring: "#a4418c",
            },
            colors: {
                primary: "#357960",
                secondary: "#0cabba",
                warning: "#f5625d",
            },
            boxShadow: {
                light: "0 1px 5px rgba(0, 0, 0, 0.1)",
                dark: "0 1px 5px rgba(141, 141, 141, 0.2)",
            },
        },
        screens: {
            "-2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            "-xl": { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            "-lg": { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            "-md": { max: "767px" },
            // => @media (max-width: 767px) { ... }

            "-sm": { max: "639px" },
            // => @media (max-width: 639px) { ... }

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
