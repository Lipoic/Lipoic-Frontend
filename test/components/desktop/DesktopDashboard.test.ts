import { beforeAll, beforeEach, describe, expect, it, vitest } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { Router, createRouter, createWebHistory } from 'vue-router';
import DesktopDashboardVue from '@/components/desktop/dashboard/DesktopDashboard.vue';
import NavigationBarVue from '@/components/NavigationBar.vue';
import AppBarVue from '@/components/desktop/AppBar.vue';

let router: Router;

beforeEach(() => {
  router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        redirect: '/overview',
      },
      {
        path: '/overview',
        component: {
          template: 'This is overview page',
        },
      },
      {
        path: '/lesson',
        component: {
          template: 'This is lesson page',
        },
      },
    ],
  });
});

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('Desktop dashboard', () => {
  it('should renders navigation bar, app bar and default router-view', async () => {
    const wrapper = mount(DesktopDashboardVue, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();

    expect(wrapper.findComponent(NavigationBarVue).exists()).toBeTruthy();
    expect(wrapper.findComponent(AppBarVue).exists()).toBeTruthy();
    expect(wrapper.text()).toContain('This is overview page');
  });

  it('should replace router-view when clicked on navigation bar', async () => {
    const wrapper = mount(DesktopDashboardVue, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    const push = vitest.spyOn(router, 'push');

    const lessonButton = wrapper.findAll('a')[2];
    await lessonButton.trigger('click');
    await flushPromises();

    expect(lessonButton.text()).toBe('我的課堂');
    expect(push).toHaveBeenCalledWith('/lesson');
    expect(push).toHaveBeenCalledTimes(1);
    expect(wrapper.text()).toContain('This is lesson page');
    expect(router.currentRoute.value.path).toBe('/lesson');
  });
});
