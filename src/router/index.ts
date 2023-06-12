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
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/PageDashboard.vue'),
    children: [
      {
        path: '',
        redirect: 'dashboard/overview',
      },
      {
        path: 'overview',
        component: () => import('@/pages/dashboard/PageOverview.vue'),
      },
      {
        path: 'class',
        component: () => import('@/pages/dashboard/PageClass.vue'),
      },
      {
        path: 'lesson',
        component: () => import('@/pages/dashboard/PageLesson.vue'),
      },
      {
        path: 'note',
        component: () => import('@/pages/dashboard/PageNote.vue'),
      },
      {
        path: 'exam',
        component: () => import('@/pages/dashboard/PageExam.vue'),
      },
    ],
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/pages/RouterView.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/pages/Account/LoginPage.vue'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () => import('@/pages/Account/SignUpPage.vue'),
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
