import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/SalaryCounter/',
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@store': `${path.resolve(__dirname, './src/store')}`,
      '@icons': `${path.resolve(__dirname, './src/icons')}`,
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@helpers': `${path.resolve(__dirname, './src/helpers')}`,
      '@styles': `${path.resolve(__dirname, './src/styles')}`,
      '@theme': `${path.resolve(__dirname, './src/theme')}`,
    },
  },
})
