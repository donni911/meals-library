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
                light: "0 1px 5px  rgba(0, 0, 0, 0.1)",
                dark: "0 1px 5px  rgba(141, 141, 141, 0.2)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
