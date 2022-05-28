import Vue from 'vue';
import mitt from 'mitt';

declare module 'vue/types/vue' {
  interface VueConstructor {
    $mitt: ReturnType<typeof mitt>;
  }
}
