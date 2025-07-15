import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { intlayerPlugin } from 'vite-intlayer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), intlayerPlugin()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          i18n: ['intlayer', 'react-intlayer'],
          icons: ['lucide-react', 'simple-icons']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})