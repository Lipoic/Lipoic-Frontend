import mitt from 'mitt';
import { App as VueApp } from 'vue';

import handError from './handError';
import globalConfig from '@/utils/config';

export type AppType = VueApp<Element>;

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install: (app: AppType) => {
    // install error handler
    handError(app);

    // global configs
    app.config.globalProperties.options = globalConfig;

    // add emit
    app.provide('$mitt', mitt());
  },
};

declare module 'vue' {
  interface ComponentCustomProperties {
    $mitt: ReturnType<typeof mitt>;
  }
  interface CSSProperties {
    // for css variables
    [key: `--${string}`]: string;
  }
}
