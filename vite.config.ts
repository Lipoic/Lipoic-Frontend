import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { config } from 'dotenv';
config();

import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? void 0 : process.env.VITE_BASE,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
