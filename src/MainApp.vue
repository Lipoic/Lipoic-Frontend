<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, watch } from 'vue';
import { useUserStore } from '@/stores/models/user';
import { useSettingsStore } from '@/stores/models/settings';

const settingsStore = useSettingsStore();
let themeModeMatchMedia: MediaQueryList | null = null;

/*  For Safari support because there are a bug of vh and vw unit of Safari. */
const setStyle = (key: `--${string}`, value: string | null) =>
  document.documentElement.style.setProperty(key, value);
const setStyles = () => {
  setStyle('--page-height', `${window.innerHeight}px`);
  setStyle('--page-width', `${window.innerWidth}px`);
};
const colorThemeListener = () => {
  settingsStore.setTheme(
    themeModeMatchMedia && themeModeMatchMedia.matches ? 'dark' : 'light'
  );
};

/* Color scheme */
onMounted(() => {
  setStyles();
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

onUnmounted(() => removeEventListener('resize', setStyles));

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

addEventListener('resize', setStyles);
</script>

<template>
  <router-view />
</template>
