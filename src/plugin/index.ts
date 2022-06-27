import { App as VueApp } from 'vue';

import handError from './handError';

export type AppType = VueApp<Element>;

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install: (app: AppType) => {
    // install error handler
    handError(app);
  },
};

declare module 'vue' {
  interface CSSProperties {
    // for css variables
    [key: `--${string}`]: string;
  }
}
