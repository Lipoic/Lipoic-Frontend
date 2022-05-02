import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './global/global.scss'

createApp(App).use(router).mount('#app');
