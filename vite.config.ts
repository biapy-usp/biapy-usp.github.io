import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Curso-Fundamentos-de-Analise-de-Bioimagens-de-Microscopia-com-Python/', // Caminho base correto para o GitHub Pages
})
