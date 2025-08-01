import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import {tanstackStart} from '@tanstack/react-start/plugin/vite'
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }), tanstackStart({
      target: 'vercel',
    }),
    react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})