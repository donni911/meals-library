import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    sourcemap: "inline",
    plugins: [vue(), svgLoader()],
    resolve: {
        alias: {
            "@": path.join(__dirname, "src"),
            'public': path.join(__dirname, "public"),
        },
    },
});
