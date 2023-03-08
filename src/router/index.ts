import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/PageHome.vue'),
  },
  {
    path: '/overview',
    name: 'Overview',
    component: () => import('@/pages/PageOverview.vue'),
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/pages/RouterView.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/pages/Home/LoginPage.vue'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import('@/pages/Home/SignUpPage.vue'),
      },
    ],
  },
  {
    path: '/oauth',
    name: 'OAuth',
    component: () => import('@/pages/RouterView.vue'),
    children: [
      {
        path: 'google',
        name: 'Google OAuth',
        component: () => import('@/pages/PageOAuth.vue'),
      },
      {
        path: 'facebook',
        name: 'Facebook OAuth',
        component: () => import('@/pages/PageOAuth.vue'),
      },
    ],
  },
  {
    path: '/verify-email',
    name: 'Verify Email',
    component: () => import('@/pages/PageVerifyEmail.vue'),
  },
];

function _create(): Router {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
}

export default _create();
