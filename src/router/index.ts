import { getAnalytics, logEvent } from 'firebase/analytics';
import FirebaseHelper from '@/helper/FirebaseHelper';
import { createRouter, createWebHistory, Router } from 'vue-router';

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

function _createRouter(): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.afterEach((to, from) => {
    const analytics = FirebaseHelper.getAnalytics();
    if (analytics === null) return;
    logEvent(
      analytics,
      'page_view',
      {
        page_path: to.path,
        page_title: to.name,
        page_location: to.path,
      {
        global: true,
      }
    );
  });

  return router;
}

export default _createRouter();
