import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
    sourcemap: "inline",
    plugins: [vue(), svgLoader()],
    resolve: {
        alias: [
            {
                find: "vue-i18n",
                replacement: "vue-i18n/dist/vue-i18n.cjs.js",
            },
            { find: "@image", replacement: "./src/assets" },
        ],
    },
});
