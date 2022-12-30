<script lang="ts" setup>
import MobileView from '@/components/overview/mobile/MobileView.vue';
import DesktopView from '@/components/overview/desktop/DesktopView.vue';
</script>

<template>
  <div class="w-[100%] phone:hidden">
    <desktop-view />
  </div>

  <div class="hidden w-[100%] phone:inline-block">
    <mobile-view />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
