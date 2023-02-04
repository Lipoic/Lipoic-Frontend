import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import RecentCardVue from '@/components/Desktop/Overview/RecentCard.vue';

describe('Recent card', () => {
  test('check the card name & math', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'math',
      },
    });

    expect(wrapper.text()).toBe('math 12/12 10:00');
  });

  test('check the card name & history', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'history',
      },
    });

    expect(wrapper.text()).toBe('history 12/12 10:00');
  });

  test('check the card image & math', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'math',
      },
    });

    expect(wrapper.find('img').attributes('src')).toBe(
      '/src/assets/overview/math.png'
    );
  });

  test('check the card image & history', () => {
    const wrapper = mount(RecentCardVue, {
      props: {
        name: 'history',
      },
    });

    expect(wrapper.find('img').attributes('src')).toBe(
      '/src/assets/overview/history.png'
    );
  });
});
