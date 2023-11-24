import { defineConfig } from 'vite'
export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        entryFileNames: "assets/script.js",
        assetFileNames: "assets/[name].[ext]"
      }
    }
  },
  server: {
    port: 5173
  }
})
