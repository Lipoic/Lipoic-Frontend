<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const setStyle = (key: `--${string}`, value: string | null) =>
  document.documentElement.style.setProperty(key, value);

// For Safari support because there are a bug of vh and vw unit of Safari.
const setStyles = () => {
  setStyle('--page-height', `${window.innerHeight}px`);
  setStyle('--page-width', `${window.innerWidth}px`);
};

addEventListener('resize', setStyles);
onMounted(() => setStyles());
onUnmounted(() => removeEventListener('resize', setStyles));
</script>

<template>
  <router-view />
</template>

<style lang="scss"></style>
