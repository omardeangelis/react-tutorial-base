import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Scegli la porta desiderata
  },
  build: {
    outDir: 'dist', // Configura la directory di output
  },
});