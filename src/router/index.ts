import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/main/About.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/main/Auth.vue'),
  },
  {
    path: '/feature',
    name: 'Features',
    component: () => import('@/views/main/Feature.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
