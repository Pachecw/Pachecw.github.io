import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repositórios do tipo <usuario>.github.io são publicados na raiz do
// domínio (ex: pachecw.github.io), então a base fica em '/'.
// Se um dia você mover o site para um repositório de projeto comum
// (ex: pachecw.github.io/nome-do-repo), troque para '/nome-do-repo/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
