import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  base: "/e-commerce/",
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',


        login: 'pages/login.html',
        about: 'pages/about.html',
        shop: 'pages/shop.html',
        
      },
    },
  },
})

