import { defineStore } from 'pinia';

interface ISettings {
  themeMode: ThemeMode;
}

enum Theme {
  dark,
  light,
}

export enum ThemeMode {
  /**
   * The theme follows the browser's theme.
   */
  auto,
  dark,
  light,
}

export const useSettingsStore = defineStore({
  id: 'settings',

  state: (): ISettings => ({
    themeMode: ThemeMode.auto,
  }),

  actions: {
    init() {
      const storageTheme = localStorage.getItem('theme_mode');

      if (storageTheme) {
        this.setThemeMode(ThemeMode[storageTheme as keyof typeof ThemeMode]);
      }
    },
    setThemeMode(mode: ThemeMode) {
      this.themeMode = mode;
      const theme = ThemeMode[mode];
      localStorage.setItem('theme_mode', theme);

      if (mode !== ThemeMode.auto && theme in Theme) {
        const html = document.querySelector('html');
        html?.setAttribute('data-theme', theme);

        // Remove old theme class
        html?.classList.remove(theme === 'dark' ? 'light' : 'dark');
        html?.classList.add(theme);
      }
    },
    toggleTheme() {
      let nextMode: ThemeMode;

      if (this.themeMode === ThemeMode.auto) {
        nextMode = ThemeMode.dark;
      } else if (this.themeMode === ThemeMode.dark) {
        nextMode = ThemeMode.light;
      } else {
        nextMode = ThemeMode.auto;
      }

      this.setThemeMode(nextMode);
    },
  },
});
