import { createApp } from 'vue';
import App from '@/MainApp.vue';
import _createRouter from '@/router';
import '@/scss/global.scss';
import I18nHelper from './helper/I18nHelper';
import FirebaseHelper from './helper/FirebaseHelper';

async function main() {
  FirebaseHelper.init();
  const i18n = await I18nHelper.load();

  createApp(App).use(_createRouter).use(i18n).mount('#app');
}

main();
