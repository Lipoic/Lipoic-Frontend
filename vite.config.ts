import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import plugins from './plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [...plugins()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    terserOptions: {
      compress: {
        // Prevent Infinity from being compressed to 1/0, may cause performance issues on Chrome
        keep_infinity: true,
        drop_console: false,
      },
    },
    minify: 'terser',
    // Speed up packing
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
});
