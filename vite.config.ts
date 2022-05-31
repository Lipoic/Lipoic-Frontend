/* eslint-disable import/no-extraneous-dependencies */

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import viteImagemin from 'vite-plugin-imagemin';

import vue from '@vitejs/plugin-vue';
import svgIcon from './plugin/svgIcon';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgIcon(),
    viteImagemin({
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    terserOptions: {
      compress: {
        // Prevent Infinity from being compressed to 1/0, may cause performance issues on Chrome
        keep_infinity: true,
        drop_console: false,
      },
      format: { comments: false },
    },
    minify: 'terser',
    // Speed up packing
    brotliSize: false,
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name]-[hash].js`,
        chunkFileNames: `assets/js/[name]-[hash].js`,
        assetFileNames: `assets/[ext]/[name]-[hash].[ext]`,
      },
    },
  },
  test: {
    coverage: {
      reporter: ['html', 'lcov'],
      all: true,
    },
    environment: 'happy-dom',
  },
});
