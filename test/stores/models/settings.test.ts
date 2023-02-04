import { createPinia, setActivePinia } from 'pinia';
import { describe, test, expect, beforeAll, beforeEach } from 'vitest';
import { ThemeMode, useSettingsStore } from '@/stores/models/settings';

beforeAll(() => {
  setActivePinia(createPinia());
});

beforeEach(() => {
  const store = useSettingsStore();
  store.$reset();

  localStorage.removeItem('theme_mode');
});

describe('Theme settings', () => {
  test('should be initialized with auto theme mode', () => {
    const store = useSettingsStore();
    store.init();

    expect(store.themeMode).toBe(ThemeMode.auto);
  });

  test('should apply the theme mode from local storage', () => {
    localStorage.setItem('theme_mode', ThemeMode[ThemeMode.light]);
    const store = useSettingsStore();
    store.init();

    expect(store.themeMode).toBe(ThemeMode.light);
  });

  test('should store the theme mode to local storage', () => {
    const store = useSettingsStore();
    store.setThemeMode(ThemeMode.dark);

    expect(store.themeMode).toBe(ThemeMode.dark);
    expect(localStorage.getItem('theme_mode')).toBe(ThemeMode[ThemeMode.dark]);
  });

  test('toggle the theme from auto to dark', () => {
    const store = useSettingsStore();
    expect(store.themeMode).toBe(ThemeMode.auto);

    store.toggleTheme();

    expect(store.themeMode).toBe(ThemeMode.dark);
    expect(localStorage.getItem('theme_mode')).toBe(ThemeMode[ThemeMode.dark]);
  });

  test('toggle the theme from dark to light', () => {
    const store = useSettingsStore();
    store.setThemeMode(ThemeMode.dark);
    expect(store.themeMode).toBe(ThemeMode.dark);

    store.toggleTheme();

    expect(store.themeMode).toBe(ThemeMode.light);
    expect(localStorage.getItem('theme_mode')).toBe(ThemeMode[ThemeMode.light]);
  });

  test('toggle the theme from light to auto', () => {
    const store = useSettingsStore();
    store.setThemeMode(ThemeMode.light);
    expect(store.themeMode).toBe(ThemeMode.light);

    store.toggleTheme();

    expect(store.themeMode).toBe(ThemeMode.auto);
    expect(localStorage.getItem('theme_mode')).toBe(ThemeMode[ThemeMode.auto]);
  });

  test('should change the html attribute & classes when the theme mode is not auto', () => {
    const store = useSettingsStore();
    const html = document.querySelector('html');

    store.setThemeMode(ThemeMode.dark);

    expect(html?.getAttribute('data-theme')).toBe('dark');
    expect(html?.classList.contains('dark')).toBe(true);
    expect(html?.classList.contains('light')).toBe(false);
  });
});
