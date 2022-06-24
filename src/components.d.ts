import 'vue';
import 'axios';
import LoadingPlugin from 'vue-loading-overlay';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof import('./components/SvgIcon.vue')['default'];
    Loading: typeof LoadingPlugin;
  }
}

export {};
