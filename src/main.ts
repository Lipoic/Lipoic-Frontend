import { createApp, defineAsyncComponent } from 'vue';
import 'virtual:svg-icons-register';

import '@/scss/global.scss';
import '@/scss/themes/dark.scss';
import '@/scss/themes/light.scss';
import { registerSW } from 'virtual:pwa-register';

import I18nHelper from './helper/I18nHelper';
import FirebaseHelper from './helper/FirebaseHelper';

import router from '@/router';

const App = defineAsyncComponent(() => import('@/MainApp.vue'));
const SvgIconComponent = defineAsyncComponent(
  () => import('@/components/SvgIcon.vue')
);

(async () => {
  FirebaseHelper.init();
  const i18n = await I18nHelper.load();

  const intervalMS = 60 * 60 * 1000;

  registerSW({ onRegistered: (_) => _ && setInterval(_.update, intervalMS) });

  createApp(App)
    .use(i18n)
    .use(router)
    .component('SvgIcon', SvgIconComponent)
    .mount('#app');
})();
