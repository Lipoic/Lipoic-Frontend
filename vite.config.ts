import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VITE_DROP_CONSOLE } from './config/constant';

import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    terserOptions: {
      compress: {
        // Prevent Infinity from being compressed to 1/0, may cause performance issues on Chrome
        keep_infinity: true,
        drop_console: VITE_DROP_CONSOLE,
      },
    },
    minify: 'terser',
    // Speed up packing
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
});
