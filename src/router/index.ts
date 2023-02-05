import { logEvent } from 'firebase/analytics';
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';
import FirebaseHelper from '@/helper/FirebaseHelper';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/PageHome.vue'),
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('@/views/PageOverview.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/RouterView.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/components/Auth/BlockLoginPage.vue'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import('@/components/Auth/BlockSignUpPage.vue'),
      },
    ],
  },
  {
    path: '/oauth',
    name: 'OAuth',
    component: () => import('@/views/RouterView.vue'),
    children: [
      {
        path: 'google',
        name: 'Google OAuth',
        component: () => import('@/views/PageOAuth.vue'),
      },
      {
        path: 'facebook',
        name: 'Facebook OAuth',
        component: () => import('@/views/PageOAuth.vue'),
      },
    ],
  },
  {
    path: '/verify-email',
    name: 'Verify Email',
    component: () => import('@/views/PageVerifyEmail.vue'),
  },
];

function _createRouter(): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  });

  // Listen to route changes
  router.afterEach((to) => {
    const analytics = FirebaseHelper.getAnalytics();
    if (analytics === null) return;
    logEvent(analytics, 'page_view', {
      page_path: to.path,
      page_title: to.name?.toString(),
      page_location: to.fullPath,
    });
  });

  return router;
}

export default _createRouter();
