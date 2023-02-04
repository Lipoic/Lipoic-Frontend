<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted, watch } from 'vue';
import { useUserStore } from '@/stores/models/user';
import { ThemeMode, useSettingsStore } from '@/stores/models/settings';

const settingsStore = useSettingsStore();
let themeModeMatchMedia: MediaQueryList | null = null;

/*  For Safari support because there are a bug of vh and vw unit of Safari. */
const setStyle = (key: `--${string}`, value: string | null) =>
  document.documentElement.style.setProperty(key, value);
const setStyles = () => {
  setStyle('--page-height', `${window.innerHeight}px`);
  setStyle('--page-width', `${window.innerWidth}px`);
};

const listenThemeChange = () => {
  const listener = () =>
    settingsStore.setThemeMode(
      themeModeMatchMedia && themeModeMatchMedia.matches
        ? ThemeMode.dark
        : ThemeMode.light
    );

  if (settingsStore.themeMode === ThemeMode.auto) {
    themeModeMatchMedia = matchMedia('(prefers-color-scheme: dark)');
    themeModeMatchMedia.addEventListener('change', listener);
    listener();
  } else {
    themeModeMatchMedia &&
      themeModeMatchMedia.removeEventListener('change', listener);
  }
};

/* Color scheme */
onMounted(() => {
  setStyles();
  listenThemeChange();
});

onUnmounted(() => removeEventListener('resize', setStyles));

// Check theme mode is changed
watch(settingsStore, () => listenThemeChange());

onBeforeMount(async () => {
  const userStore = useUserStore();
  // https://github.com/vuejs/pinia/discussions/512
  userStore.init();
  settingsStore.init();
});

addEventListener('resize', setStyles);
</script>

<template>
  <router-view />
</template>
