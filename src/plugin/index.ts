import mitt from 'mitt';
import { App as VueApp } from 'vue';

import handError from './handError';
import configs from '@/configs';

export type AppType = VueApp<Element>;

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install: (app: AppType) => {
    // install error handler
    handError(app);

    // global configs
    app.config.globalProperties.options = configs;

    // add emit
    app.provide('$mitt', mitt());

    console.log(app);
  },
};
