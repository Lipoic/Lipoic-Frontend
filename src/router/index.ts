import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/PageHome.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/PageAbout.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/PageAuth.vue'),
  },
  {
    path: '/feature',
    name: 'Features',
    component: () => import('@/views/PageFeature.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/PageDemo.vue'),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
