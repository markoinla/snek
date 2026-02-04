// @ts-nocheck
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      'snek-shared': fileURLToPath(new URL('../shared/src/index.ts', import.meta.url)),
    },
  },
  appType: 'spa',
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
