import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'; // Make sure this is imported only once

// Construct __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
});
