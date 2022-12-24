<script lang="ts" setup>
import MobileView from '@/components/overview/mobile/index.vue';
import DesktopView from '@/components/overview/desktop/index.vue';
</script>

<template>
  <div class="w-[100%] phone:hidden">
    <DesktopView />
  </div>

  <div class="hidden w-[100%] phone:inline-block">
    <MobileView />
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';
</style>
