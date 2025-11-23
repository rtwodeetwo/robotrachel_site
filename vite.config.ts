import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'robotrachel.com',
      'www.robotrachel.com',
      '.up.railway.app'
    ]
  }
})
