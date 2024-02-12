import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        laravel(["resources/js/main.jsx", "resources/scss/app.scss"]),
        react(),
        svgr(),
    ],
});
