import { createApp } from 'vue';
import App from '@/MainApp.vue';
import router from '@/router';
import '@/scss/global.scss';
import I18nHelper from './locales/i18n_helper';

async function main() {
  const i18n = await I18nHelper.load();

  createApp(App).use(router).use(i18n).mount('#app');
}

main();
