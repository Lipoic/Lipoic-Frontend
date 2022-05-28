/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';

import vue from '@vitejs/plugin-vue';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import svgIcon from './plugin/svgIcon';

const pwaOptions: Partial<VitePWAOptions> = {
  includeAssets: ['favicon.ico'],
  manifest: {
    name: 'Lipoic',
    short_name: 'Lipoic',
    description:
      'Lipoic 是一個致力於整合與改善遠距授課與線上教室的教育平台，並讓學生能不受空間限制學習知識，老師能更便利地傳授知識，並且我們也熱衷於開放文化的精神，與我們一起翻轉教育吧！',
    theme_color: '#5efff2',
    icons: [
      {
        src: 'icons/pwa-icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'icons/pwa-icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
  devOptions: {
    enabled: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgIcon(), VitePWA(pwaOptions)],
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
