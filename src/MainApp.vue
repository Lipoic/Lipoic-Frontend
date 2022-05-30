<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';

/*  For Safari support because there are a bug of vh and vw unit of Safari. */
const pageWidthHeight = reactive({
  height: window.innerHeight,
  width: window.innerWidth,
});

const setStyles = () => {
  pageWidthHeight.height = window.innerHeight;
  pageWidthHeight.width = window.innerWidth;
};

addEventListener('resize', setStyles);
onMounted(() => setStyles());
onUnmounted(() => removeEventListener('resize', setStyles));

/* color scheme */
onMounted(() => {
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

<style lang="scss">
:root {
  --page-height: v-bind('pageWidthHeight.height');
  --page-width: v-bind('pageWidthHeight.width');
}
</style>
