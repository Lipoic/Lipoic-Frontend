import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';
import { Router, createRouter, createWebHistory } from 'vue-router';
import NavigationBarVue from '@/components/NavigationBar.vue';

let router: Router;

beforeEach(() => {
  router = createRouter({
    history: createWebHistory(),
    routes: [],
  });
});

describe('Navigation Bar', () => {
  it('check the name of navigation buttons', () => {
    const wrapper = mount(NavigationBarVue, {
      global: {
        plugins: [router],
      },
    });

    const navbarItems = wrapper.findAll('.navbar-item');
    const titles = navbarItems.map((item) => item.text());

    expect(titles).toEqual([
      '總覽',
      '我的班級',
      '我的課堂',
      '我的筆記',
      '試題庫',
    ]);
  });

  it('check the length of navigation buttons', () => {
    const wrapper = mount(NavigationBarVue, {
      global: {
        plugins: [router],
      },
    });

    const navbarItems = wrapper.findAll('.navbar-item');

    expect(navbarItems.length).toBe(5);
  });

  it('router should be pushed when click the navigation bar overview button', async () => {
    const wrapper = mount(NavigationBarVue, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    const push = vitest.spyOn(router, 'push');

    const overviewButton = wrapper.findAll('a')[0];
    await overviewButton.trigger('click');
    await flushPromises();

    expect(overviewButton.text()).toContain('總覽');
    expect(push).toHaveBeenCalledWith('/overview');
    expect(push).toHaveBeenCalledTimes(1);
    expect(router.currentRoute.value.path).toBe('/overview');
  });

  it('router should be pushed when click the navigation bar class button', async () => {
    const wrapper = mount(NavigationBarVue, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    const push = vitest.spyOn(router, 'push');

    const classButton = wrapper.findAll('a')[1];
    await classButton.trigger('click');
    await flushPromises();

    expect(classButton.text()).toBe('我的班級');
    expect(push).toHaveBeenCalledWith('/class');
    expect(push).toHaveBeenCalledTimes(1);
    expect(router.currentRoute.value.path).toBe('/class');
  });

  it('router should be pushed when click the navigation bar lesson button', async () => {
    const wrapper = mount(NavigationBarVue, {
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
    expect(router.currentRoute.value.path).toBe('/lesson');
  });

  it('router should be pushed when click the navigation bar note button', async () => {
    const wrapper = mount(NavigationBarVue, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    const push = vitest.spyOn(router, 'push');

    const noteButton = wrapper.findAll('a')[3];
    await noteButton.trigger('click');
    await flushPromises();

    expect(noteButton.text()).toBe('我的筆記');
    expect(push).toHaveBeenCalledWith('/note');
    expect(push).toHaveBeenCalledTimes(1);
    expect(router.currentRoute.value.path).toBe('/note');
  });

  it('router should be pushed when click the navigation bar exam button', async () => {
    const wrapper = mount(NavigationBarVue, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    const push = vitest.spyOn(router, 'push');

    const examButton = wrapper.findAll('a')[4];
    await examButton.trigger('click');
    await flushPromises();

    expect(examButton.text()).toBe('試題庫');
    expect(push).toHaveBeenCalledWith('/exam');
    expect(push).toHaveBeenCalledTimes(1);
    expect(router.currentRoute.value.path).toBe('/exam');
  });
});
