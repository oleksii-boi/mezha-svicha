import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  base: 'oleksii-boi/mezha-svicha',
  plugins: [
    react(),
    ViteImageOptimizer({
      // Optimize PNG images
      png: {
        quality: 60,
      },
      // Optimize JPEG images
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
});
