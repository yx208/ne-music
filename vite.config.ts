import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    clearScreen: true,
    server: {
        strictPort: true,
        port: 6601
    },
    envPrefix: ["VITE_", "TAURI_"],
    build: {
        // @ts-ignore
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        // @ts-ignore
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        // @ts-ignore
        sourcemap: !!process.env.TAURI_DEBUG,
    }
});
