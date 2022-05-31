<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);
const BlockHomeIntroVue = defineAsyncComponent(
  () => import('@/components/BlockHomeIntro.vue')
);
</script>

<template>
  <MainViewVue id="home">
    <BlockHomeIntroVue />
  </MainViewVue>
</template>

<style lang="scss" scoped></style>
