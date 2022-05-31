<template>
  <MainViewVue id="about"></MainViewVue>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);
</script>

<style lang="scss" scoped></style>
