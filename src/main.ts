import { createApp, defineAsyncComponent } from 'vue';
import 'virtual:svg-icons-register';

import '@/scss/global.scss';
import '@/scss/themes/dark.scss';
import '@/scss/themes/light.scss';
import { registerSW } from 'virtual:pwa-register';

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

  // Register service worker and auto-update service worker every hour.
  registerSW({
    onRegistered: (_) => _ && setInterval(_.update, 60 * 60 * 1000),
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
