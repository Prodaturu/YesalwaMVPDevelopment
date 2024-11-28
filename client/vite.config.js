import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Reference: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  base: './', // Ensures assets are resolved correctly
  build: {
    outDir: 'dist', // Default, but ensure it's set explicitly
    assetsDir: 'assets', // Keeps static files organized
  },
});
