/* eslint-disable import/no-extraneous-dependencies */

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

import vue from '@vitejs/plugin-vue';
import svgIcon from './plugin/svgIcon';
import PWAPlugin from './plugin/pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgIcon(), PWAPlugin()],
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
    chunkSizeWarningLimit: 2000,
  },
  test: {
    coverage: {
      reporter: ['html', 'lcov'],
      all: true,
      exclude: [
        'node_modules/**',
        'dist/**',
        'public/**',
        'plugin/**',
        'test/**',
        '.eslintrc.js',
        'vite.config.ts',
        '**/*.d.ts',
        'postcss.config.js',
        'tailwind.config.js',
      ],
    },
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
  },
});
