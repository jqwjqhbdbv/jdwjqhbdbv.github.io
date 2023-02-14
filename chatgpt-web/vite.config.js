import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/jdwjqhbdbv.github.io/',
  build:{
  },
  // publicPath: process.env.NODE_ENV === "production" ? "/jdwjqhbdbv.github.io/prod" : "/",
  resolve: {
    
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
