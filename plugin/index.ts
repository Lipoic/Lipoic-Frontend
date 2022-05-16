import { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';

import svgIcon from './svgIcon';

export const loadVitePlugins = () => {
  const vitePlugins: Array<Plugin[] | Plugin> = [vue()];

  vitePlugins.push(svgIcon());

  return vitePlugins;
};

export default loadVitePlugins;
