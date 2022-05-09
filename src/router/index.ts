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
    component: () => import('@/views/page/About.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/page/Auth.vue'),
  },
  {
    path: '/feature',
    name: 'Features',
    component: () => import('@/views/page/Feature.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/page/Demo.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
