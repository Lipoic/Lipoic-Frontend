import 'vue';
import 'axios';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof import('./components/SvgIcon.vue')['default'];
  }
}

export {};
