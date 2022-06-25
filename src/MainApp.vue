<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useUserStore } from '@/stores/models/user';
import http from '@/http';

const userStore = useUserStore();

// https://github.com/vuejs/pinia/discussions/512
userStore.userInit();

/*  For Safari support because there are a bug of vh and vw unit of Safari. */
const setStyle = (key: `--${string}`, value: string | null) =>
  document.documentElement.style.setProperty(key, value);

const setStyles = () => {
  setStyle('--page-height', `${window.innerHeight}px`);
  setStyle('--page-width', `${window.innerWidth}px`);
};

addEventListener('resize', setStyles);
onMounted(() => setStyles());
onUnmounted(() => removeEventListener('resize', setStyles));

/* color scheme */
onMounted(() => {
  http.get('/');
  const storage = localStorage.getItem('theme');
  if (!storage) {
    const mql = matchMedia('(prefers-color-scheme: dark)');

    mql.addEventListener('change', (e) => setScheme(e.matches));
    setScheme(mql.matches);
  } else setScheme(storage);
});

/** @param {boolean} _isLight - true: light, false: dark */
const setScheme = (_isLight: boolean | string) => {
  let isLight: number = +_isLight;
  const schemes = ['dark', 'light'];

  if (typeof _isLight === 'string') {
    const index = schemes.indexOf(_isLight);
    if (index !== -1) isLight = +!!index;
  }
  const scheme = schemes[+isLight];
  const html = document.querySelector('html');

  html?.setAttribute('data-theme', scheme);
  html?.classList.add(scheme);
  html?.classList.remove(schemes[+!isLight]);
};
</script>

<template>
  <router-view />
</template>
