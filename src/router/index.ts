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

function _create(): Router {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
}

export default _create();
