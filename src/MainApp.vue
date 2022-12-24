<script setup lang="ts">
import { onBeforeMount, onMounted, watch } from 'vue';
import { useUserStore } from '@/stores/models/user';
import { useSettingsStore } from '@/stores/models/settings';

const settingsStore = useSettingsStore();
let themeModeMatchMedia: MediaQueryList | null = null;

const colorThemeListener = () => {
  settingsStore.setTheme(
    themeModeMatchMedia && themeModeMatchMedia.matches ? 'dark' : 'light'
  );
};

/* Color scheme */
onMounted(() => {
  const storageTheme = localStorage.getItem('theme');

  if (!storageTheme) {
    // Default is auto theme
    settingsStore.setThemeMode('auto');
  } else {
    settingsStore.setThemeMode(storageTheme);
  }

  if (settingsStore.themeMode === 'auto') {
    themeModeMatchMedia = matchMedia('(prefers-color-scheme: dark)');
    themeModeMatchMedia.addEventListener('change', colorThemeListener);
    colorThemeListener();
  }
});

// Check theme mode is changed
watch(settingsStore, () => {
  const { themeMode } = settingsStore;

  if (themeMode === 'auto') {
    themeModeMatchMedia = matchMedia('(prefers-color-scheme: dark)');
    themeModeMatchMedia.addEventListener('change', colorThemeListener);
    colorThemeListener();
  } else {
    themeModeMatchMedia &&
      themeModeMatchMedia.removeEventListener('change', colorThemeListener);
  }
});

onBeforeMount(async () => {
  const userStore = useUserStore();
  // https://github.com/vuejs/pinia/discussions/512
  userStore.init();
});
</script>

<template>
  <router-view />
</template>
