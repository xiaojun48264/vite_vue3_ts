import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  },
  build: {
    terserOptions: {
      compress: {
        keep_classnames: true,
        drop_console: true,
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 1500
  }
})
