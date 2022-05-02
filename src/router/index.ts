import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/auth.vue'),
  },
  {
    path: '/feature',
    name: 'Features',
    component: () => import('../views/feature.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
