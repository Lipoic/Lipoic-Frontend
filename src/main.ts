import { createApp, defineAsyncComponent } from 'vue';
import 'virtual:svg-icons-register';

import '@/scss/global.scss';
import '@/scss/themes/dark.scss';
import '@/scss/themes/light.scss';
import { useRegisterSW } from 'virtual:pwa-register/vue';

import LoadingPlugin from 'vue-loading-overlay';
import I18nHelper from './helper/I18nHelper';
import FirebaseHelper from './helper/FirebaseHelper';

import router from '@/router';
import plugin from '@/plugin';
import store from '@/stores';

const App = defineAsyncComponent(() => import('@/MainApp.vue'));
const SvgIconComponent = defineAsyncComponent(
  () => import('@/components/SvgIcon.vue')
);

(async () => {
  const i18n = await I18nHelper.load();

  // Register service worker and auto-update it every hour.
  useRegisterSW({
    immediate: true,
    onRegisteredSW(swUrl, r) {
      console.log(`Service Worker at: ${swUrl}`);

      r &&
        setInterval(async () => {
          console.log('Checking for sw update');
          await r.update();
        }, 60 * 60 * 1000);

      console.log(`SW Registered: ${r}`);
    },
  });

  createApp(App)
    .use(i18n)
    .use(store)
    .use(plugin)
    .use(router)
    .component('Loading', LoadingPlugin)
    .component('SvgIcon', SvgIconComponent)
    .mount('#app');

  FirebaseHelper.init();
})();
