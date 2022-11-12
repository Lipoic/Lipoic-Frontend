// eslint-disable-next-line import/no-extraneous-dependencies
import { VitePWA } from 'vite-plugin-pwa';

export const PWAPlugin = () =>
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'robots.txt'],
    manifest: {
      name: 'Lipoic',
      short_name: 'Lipoic',
      description:
        'Lipoic 是一個致力於整合與改善遠距授課與線上教室的教育平台，並讓學生能不受空間限制學習知識，老師能更便利地傳授知識，並且我們也熱衷於開放文化的精神，與我們一起翻轉教育吧！',
      theme_color: '#546bed',
      background_color: '#4f4f4f',
      icons: [
        { src: './icons/icon-512.png', sizes: '512x512', type: 'image/png' },
        { src: './icons/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: './icons/icon-144.png', sizes: '144x144', type: 'image/png' },
      ],
      display: 'minimal-ui',
      lang: 'zh-TW',
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
  });

export default PWAPlugin;
