import { copyFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

function copyIndexTo404() {
  return {
    name: 'copy-index-to-404',
    closeBundle() {
      const outDir = path.resolve(rootDir, 'dist')
      const indexPath = path.join(outDir, 'index.html')
      const fallbackPath = path.join(outDir, '404.html')

      if (existsSync(indexPath)) {
        copyFileSync(indexPath, fallbackPath)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), copyIndexTo404()],
  // Relative base makes builds portable across:
  // - username.github.io root sites
  // - project pages (/repo/)
  // - custom domains
  base: './',
  build: {
    target: 'es2020',
    outDir: 'dist',
    emptyOutDir: true,
  },
})
