import { createApp } from 'vue';
import App from './MainApp.vue';
import router from './router';
import './scss/global.scss';

createApp(App).use(router).mount('#app');
