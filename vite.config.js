import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "csun",
    project: "javascript-react"
  })],
  base:"/Apple_clone/",
  build: {
    sourcemap: true
  }
})