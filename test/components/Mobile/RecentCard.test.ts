import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import RecentCardVue from '@/components/mobile/dashboard/RecentCard.vue';

describe('Recent card', () => {
  test('check the card name & math', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'math',
      },
    });

    expect(wrapper.text()).toBe('math五分鐘後開始');
  });

  test('check the card name & none', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'none',
      },
    });

    expect(wrapper.text()).toBe('none五分鐘後開始');
  });

  test('check the card image & math', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'math',
      },
    });

    expect(wrapper.find('img').attributes('src')).toBe(
      '/src/assets/overview/math-square.png'
    );
  });

  test('check the card image & none', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'none',
      },
    });

    expect(wrapper.find('img').attributes('src')).toBe(
      '/src/assets/overview/none-square.png'
    );
  });
});
