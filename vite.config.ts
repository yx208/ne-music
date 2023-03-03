import {defineConfig} from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    clearScreen: true,
    server: {
        strictPort: true,
        port: 6606
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    envPrefix: ["VITE_", "TAURI_"],
    build: {
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        sourcemap: !!process.env.TAURI_DEBUG,
    }
});
