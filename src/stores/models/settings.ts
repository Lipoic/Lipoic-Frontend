import { defineStore } from 'pinia';

export interface ISettings {
  theme: string;
  themeMode: string;
}

export const useSettingsStore = defineStore({
  id: 'settings',
  state: (): ISettings => ({
    theme: 'dark',
    themeMode: '',
  }),
  actions: {
    setThemeMode(theme: string) {
      this.themeMode = theme;
    },

    toggleTheme() {
      let newTheme = '';

      if(this.themeMode === 'auto') {
        newTheme = 'dark';
      } else if(this.themeMode === 'dark') {
        newTheme = 'light';
      } else {
        newTheme = 'auto';
      }

      // storage
      localStorage.setItem('theme', newTheme);
      this.themeMode = newTheme;

      if(newTheme !== 'auto') this.setTheme(newTheme)
    },
  
    setTheme(theme: string) {
      console.log('theme', theme);

      const html = document.querySelector('html');
      html?.setAttribute('data-theme', theme);
      // remove old theme class
      html?.classList.remove(theme === 'dark' ? 'light' : 'dark');
      html?.classList.add(theme);

      // state
      this.theme = 'light';
    },
  },
});
