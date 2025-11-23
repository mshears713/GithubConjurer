import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@orchard': path.resolve(__dirname, './src/orchard'),
      '@content': path.resolve(__dirname, './src/content'),
      '@git': path.resolve(__dirname, './src/git'),
      '@npc': path.resolve(__dirname, './src/npc'),
      '@state': path.resolve(__dirname, './src/state'),
      '@scenarios': path.resolve(__dirname, './src/scenarios'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['child_process', 'util', 'path', 'fs', 'os'],
    },
  },
})
