import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        main: 'index.html',


        login: 'pages/login.html',
        about: 'pages/about.html',
        shop: 'pages/shop.html',
        single: 'pages/single.html',
        checkout: 'pages/checkout.html',
        
      },
    },
  },
})

