import { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

import svgIcon from './svgIcon';
// import imagemin from './imagemin';

export const loadVitePlugins = () => {
  const vitePlugins: Array<Plugin[] | Plugin> = [vue()];

  vitePlugins.push(svgIcon());
  // vitePlugins.push(imagemin());

  return vitePlugins;
};

export default loadVitePlugins;
