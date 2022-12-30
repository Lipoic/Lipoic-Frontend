<script lang="ts" setup>
import AppBar from '@/components/overview/mobile/AppBar.vue';
import NavigationBar from '@/components/overview/mobile/NavigationBar.vue';
import Content from './OverviewContent.vue';
</script>

<template>
  <app-bar />
  <content />
  <navigation-bar />
  <div class="navigation-overlay"></div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.navigation-overlay {
  min-height: 6rem;
}
</style>
