<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const MainViewVue = defineAsyncComponent(
  () => import('@/components/MainView.vue')
);
</script>

<template>
  <MainViewVue id="feature"></MainViewVue>
</template>

<style lang="scss" scoped></style>
