import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import * as path from 'path';

export const svgIconPlugin = () =>
  createSvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: true,
    customDomId: '__svg__icons__dom__',
  });

export default svgIconPlugin;
