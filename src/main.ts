import { createApp } from 'vue';
import App from '@/MainApp.vue';
import router from '@/router';
import '@/scss/global.scss';
import i18nLoader from './locales/i18n_loader';

const i18n = await i18nLoader.load();

createApp(App).use(router).use(i18n).mount('#app');
