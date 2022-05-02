import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/page_home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/page_about.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/page_auth.vue'),
  },
  {
    path: '/feature',
    name: 'Features',
    component: () => import('../views/page_feature.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
