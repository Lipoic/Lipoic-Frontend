<script lang="ts" setup>
import AppBar from '@/components/Mobile/AppBar.vue';
import Content from '@/components/Mobile/Dashboard/OverviewContent.vue';
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<template>
  <AppBar />
  <Content />
  <NavigationBar />
  <div class="navigation-overlay"></div>
</template>

<style lang="scss" scoped>
@import '@/scss/global.scss';

.navigation-overlay {
  min-height: 6rem;
}
</style>
