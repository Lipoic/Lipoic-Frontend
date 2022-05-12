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
    target: '2015',
    terserOptions: {
      compress: {
        // 防止 Infinity 被壓縮成1/0，可能會導致 Chrome 上的性能問題
        keep_infinity: true,
        drop_console: VITE_DROP_CONSOLE,
      },
    },
    // 加快打包速度
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
});
